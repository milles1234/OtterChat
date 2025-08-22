import { NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import {Server} from "socket.io"
import { Socket } from "dgram";
import { channel } from "diagnostics_channel";
import { Messagetype } from "@/otterchat/prisma/client";
import { Content } from "next/font/google";

//socket server declaration fot typescript
let io :  Server | null = null

// initalize socket server its a global function used through out the project
function initSocketServer(httpServer: any){
    io = new Server(httpServer,{
        cors: {
            origin: process.env.NEXTAUTH_URL || "http:/localhost:3000",
            methods : ["GET", "POST"],
            credentials: true,
        },
    })
    io.on("connection", async(socket) =>{
        console.log("User connected:", socket.id)

        //authentication of user
        const session = socket.handshake.auth.session
        if(!session.user?.id){
            socket.disconnect()
            return
        }

        const userId = session.user.id
        socket.data.userId = userId
        socket.data.user = session.user

        //update user status
        await prisma.users.update({
            where:{ id: userId},
            data: {status: "online"}
        })
        
        //join user to their servers
        const userServers = await prisma.serverMembers.findMany({
            where: {user_id: userId},
            include: {server: true},
        })

        userServers.forEach((ServerMember: { server_id: string }) => {
            socket.join(`server:${ServerMember.server_id}`)
        })

        //notify others that the user is online
        userServers.forEach((ServerMember: { server_id: string }) => {
            socket.to('server:$(ServerMember.server_id').emit("user_status_change",{
                userId,
                status: "online",
                session: session.user
            })

        })

        //handle joining a channel
        socket.on("join_channel", async(channel_Id: string) => {
            //verifying the user had access to this channel
            const channel = await prisma.channels.findFirst({
                where: {
                    id : channel_Id,
                    server:{
                        members: {
                            some: {
                                user_id: userId,
                            },
                        },
                    },
               
                    

                },
                include: {server: true},


            })

            if (channel){
                socket.join('channel: ${channel_id}')
                console.log('user ${userId} have joined the channel ${channelId')
            }

        })
        //handling leavind a channel
        socket.on("leave_channel", (channelId: string) => {
            socket.leave('channelId ${channelId}')
            console.log("user ${userId} left the channel ${channelId}")
        })

        //handling sending messages
        socket.on("sending_message", async (data:{
            channelId: string
            content: string
            mesaage_type?: string 
        }) =>{
            //verify the user
            try{
                const channel = await prisma.channels.findFirst({
                    where:{
                        id: data.channelId,
                        server:{
                            members: {
                                some: {
                                    user_id: userId
                                }
                            },
                        },

                    },
                })
                if(!channel){
                    socket.emit("error", {message: "channel not found or denied"})
                    return
                }
                //save message in db
                const message = await prisma.messages.create({
                    data:{
                        content: data.content,
                        author_id: userId,
                        channel_id: data.channelId,
                        message_type: (data.mesaage_type as Messagetype) || "default",

                    },
                    include:{
                        author_id:{
                            select:{
                                id: true,
                                username: true,
                                display_name: true,
                                avatar_url: true


                            }
                        }
                    }


                })
                //braodcast message to all user in the channel
                if (io) {
                    io.to('channel: ${data.channelId}').emit("new Message",{
                        id: message.id,
                        author: message.author_id,
                        content:message.content,
                        created_at: message.created_at,
                        message_type: message.message_type,
                    })
                }
                
            }catch(error){
                console.log("Error in sending the message", error)
                socket.emit("error", {message: "failed to send the message"})
            }

        }
    )
            // Handle typing indicators
            socket.on("start_typing", (channelId :string) =>{
                socket.to('channel: ${channelId}').emit("user is typing ",{
                    userId,
                    username: session.user.username,
                    channelId,
                })
            })
            socket.on("stop_typing", (channelId: string)=>{
                socket.to('channel: ${channelId}').emit("user stoped typing",{
                    userId,
                    channelId,
                })
            })
            //handle user status
            socket.on("update_status",async(status: string)=>{
                if(!["online","offline","dnd","idle"].includes(status)) return


                await prisma.users.update({
                    where: {id: userId},
                    data: {status: status as any},
                })
            })
            //handle disconnect
            socket.on("disconnect", async()=>{
                console.log("user disconnected:", socket.id)

                //change status to offline
                await prisma.users.update({
                    where:{id: userId},
                    data: {status: "offline"},
                })
            })

            //Notify others that the user s offline
            userServers.forEach((serverMember: { server_id: string }) => {
                socket.to(`server:${serverMember.server_id}`).emit("user_status_change",{
                    userId,
                    status: "offline"
                })
            })
        
        
    })
    return io
}

export async function GET(req: NextRequest) {
    return new Response("Socket.io server initiallized", {status: 200})
    
}

export {io, initSocketServer}
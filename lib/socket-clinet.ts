import { error } from "console"
import {io, Socket} from "socket.io-client"

let socket: Socket | null = null

export const getSocket = (session?: any): Socket | null => {
    if (!socket && typeof window !== "undefined" && session){
        socket = io(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",{
            auth:{
                session: session,
            },
            autoConnect: false
        })
        socket.on("connect", ()=>{
            console.log("Connected to the server")

        })
        socket.on("disconnect", () => {
            console.log("Disconnected from the server")
        })
        socket.on("connect_error", (error) =>{
            console.log("Connection error:", error)
        })
    }
    return socket;
};




export const disconnectSocket = () => {
    if(socket){
        socket.disconnect()
        socket = null
    }
}
export {socket}
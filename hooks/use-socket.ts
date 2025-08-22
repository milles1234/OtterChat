"use client"

import { getSocket, disconnectSocket, socket } from "@/lib/socket-clinet"
import { useSession } from "next-auth/react"
import { disconnect } from "process"
import { useEffect, useRef } from "react"
import { Socket } from "socket.io-client"

export const useSocket = () => {
    const {data: session} = useSession()
    const socketRef = useRef<Socket | null>(null)//to survive re-render every time 

    useEffect(() => {
        if (session?.user){
            socketRef.current = getSocket(session) //just check it conected or not it will not automaticlly connect till we use conect()

            
            if(socketRef.current &&  !socketRef.current.connected){
                socketRef.current.connect()
            }
        }

        //unmount connection disconnect()

        return () => {
            if(socketRef.current){
                disconnectSocket()
                socketRef.current = null
            }
        }

    },[session]) //Keeps one socket per user (avoids reconnect spam).

    return socketRef.current
}




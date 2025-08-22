"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { io, Socket } from "socket.io-client"

interface SocketContextType {
  socket: Socket | null
  isConnected: boolean
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
})

export const useSocket = () => useContext(SocketContext)

interface SocketProviderProps {
  children: React.ReactNode
}

export function SocketProvider({ children }: SocketProviderProps) {
  const { data: session, status } = useSession()
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (status === "loading") return
    
    if (session?.user?.id) {
      console.log("Initializing socket connection...")
      
      // Create socket connection
      const socketInstance = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001", {
        auth: { 
          session: session 
        },
        autoConnect: true,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        timeout: 20000,
        transports: ['websocket', 'polling'],
      })

      // Connection events
      socketInstance.on("connect", () => {
        console.log("Socket connected:", socketInstance.id)
        setIsConnected(true)
      })

      socketInstance.on("disconnect", (reason) => {
        console.log("Socket disconnected:", reason)
        setIsConnected(false)
      })

      socketInstance.on("connect_error", (error) => {
        console.error("Socket connection error:", error)
        setIsConnected(false)
      })

      // Error handling
      socketInstance.on("error", (error) => {
        console.error("Socket error:", error)
      })

      setSocket(socketInstance)

      return () => {
        console.log("Cleaning up socket connection")
        socketInstance.disconnect()
        setSocket(null)
        setIsConnected(false)
      }
    } else {
      // Clean up socket if user is not authenticated
      if (socket) {
        console.log("User logged out, disconnecting socket")
        socket.disconnect()
        setSocket(null)
        setIsConnected(false)
      }
    }
  }, [session, status])

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  )
}
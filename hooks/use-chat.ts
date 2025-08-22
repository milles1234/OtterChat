"use client"

import { useState, useEffect, useCallback } from "react"
import { useSocket } from "./use-socket"

interface Message {
  id: string
  content: string
  author: {
    id: string
    username: string
    display_name: string
    avatar_url?: string
  }
  created_at: string
  message_type: string
}

interface TypingUser {
  userId: string
  username: string
}

export const useChat = (channelId?: string) => {
  const socket = useSocket()
  const [messages, setMessages] = useState<Message[]>([])
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([])
  const [isConnected, setIsConnected] = useState(false)

  // Load initial messages
  useEffect(() => {
    if (channelId) {
      loadMessages(channelId)
    }
  }, [channelId])

  // Socket connection status
  useEffect(() => {
    if (!socket) return

    const handleConnect = () => setIsConnected(true)
    const handleDisconnect = () => setIsConnected(false)

    socket.on("connect", handleConnect)
    socket.on("disconnect", handleDisconnect)

    return () => {
      socket.off("connect", handleConnect)
      socket.off("disconnect", handleDisconnect)
    }
  }, [socket])

  // Handle channel joining
  useEffect(() => {
    if (!socket || !channelId) return

    socket.emit("join_channel", channelId)

    return () => {
      socket.emit("leave_channel", channelId)
    }
  }, [socket, channelId])

  // Handle real-time messages
  useEffect(() => {
    if (!socket) return

    const handleNewMessage = (message: Message) => {
      setMessages((prev) => [...prev, message])
    }

    const handleUserTyping = (data: { userId: string; username: string; channelId: string }) => {
      if (data.channelId === channelId) {
        setTypingUsers((prev) => {
          const existing = prev.find(u => u.userId === data.userId)
          if (!existing) {
            return [...prev, { userId: data.userId, username: data.username }]
          }
          return prev
        })
      }
    }

    const handleUserStopTyping = (data: { userId: string; channelId: string }) => {
      if (data.channelId === channelId) {
        setTypingUsers((prev) => prev.filter(u => u.userId !== data.userId))
      }
    }

    socket.on("new_message", handleNewMessage)
    socket.on("user_typing", handleUserTyping)
    socket.on("user_stop_typing", handleUserStopTyping)

    return () => {
      socket.off("new_message", handleNewMessage)
      socket.off("user_typing", handleUserTyping)
      socket.off("user_stop_typing", handleUserStopTyping)
    }
  }, [socket, channelId])

  // Load messages from database
  const loadMessages = async (channelId: string) => {
    try {
      const response = await fetch(`/api/channels/${channelId}/messages`)
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
      }
    } catch (error) {
      console.error("Error loading messages:", error)
    }
  }

  // Send message
  const sendMessage = useCallback((content: string) => {
    if (!socket || !channelId || !content.trim()) return

    socket.emit("send_message", {
      channelId,
      content: content.trim(),
    })
  }, [socket, channelId])

  // Typing indicators
  const startTyping = useCallback(() => {
    if (!socket || !channelId) return
    socket.emit("start_typing", channelId)
  }, [socket, channelId])

  const stopTyping = useCallback(() => {
    if (!socket || !channelId) return
    socket.emit("stop_typing", channelId)
  }, [socket, channelId])

  return {
    messages,
    typingUsers,
    isConnected,
    sendMessage,
    startTyping,
    stopTyping,
    loadMessages,
  }
}
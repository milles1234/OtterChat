"use client"

import { useRef, useEffect } from "react"
import { Message, type MessageProps } from "./message"
import { ScrollArea } from "./ui/scroll-area"
import { useChat } from "@/hooks/use-chat"

interface MessageListProps {
  channelId: string
}

export function MessageList({ channelId }: MessageListProps) {
  const { messages, typingUsers, isConnected } = useChat(channelId) as unknown as {
    messages: MessageProps["message"][],
    typingUsers: { username: string }[],
    isConnected: boolean
  }
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages])

  return (
    <ScrollArea ref={scrollAreaRef} className="flex-1 px-4">
      <div className="py-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p>No messages yet. Be the first to say something!</p>
          </div>
        ) : (
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        )}
        
        {/* Typing indicators */}
        {typingUsers.length > 0 && (
          <div className="flex items-center space-x-2 text-sm text-gray-500 px-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
            <span>
              {typingUsers.length === 1 
                ? `${typingUsers[0].username} is typing...`
                : `${typingUsers.length} people are typing...`
              }
            </span>
          </div>
        )}
      </div>
      
      {/* Connection status */}
      {!isConnected && (
        <div className="text-center text-red-500 text-sm py-2">
          Connection lost - messages may not be real-time
        </div>
      )}
    </ScrollArea>
  )
}
"use client"

import { useState, useRef, useCallback } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Send, Plus, Smile } from "lucide-react"
import { useChat } from "@/hooks/use-chat"

interface MessageInputProps {
  channelId: string
}

export function MessageInput({ channelId }: MessageInputProps) {
  const [message, setMessage] = useState("")
  const { sendMessage, startTyping, stopTyping, isConnected } = useChat(channelId)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim() || !isConnected) return

    sendMessage(message)
    setMessage("")
    
    // Stop typing indicator
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current!)
      typingTimeoutRef.current = null
    }
    stopTyping()
  }

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    
    // Start typing indicator
    startTyping()
    
    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }
    
    // Stop typing after 3 seconds of inactivity
    typingTimeoutRef.current = setTimeout(() => {
      stopTyping()
    }, 3000)
  }, [startTyping, stopTyping])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="border-t border-gray-200 p-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="flex-shrink-0"
        >
          <Plus className="h-4 w-4" />
        </Button>

        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder={`Message #${channelId}`}
            disabled={!isConnected}
            className="resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>

        <Button
          type="submit"
          disabled={!message.trim() || !isConnected}
          size="sm"
          className="flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
      
      {/* Connection status */}
      {!isConnected && (
        <div className="text-xs text-red-500 mt-1">
          Disconnected - trying to reconnect...
        </div>
      )}
    </div>
  )
}
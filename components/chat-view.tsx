"use client"

import { useState, useEffect, useRef } from "react"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"
import { Hash, Users } from "lucide-react"
import { Button } from "./ui/button"

interface ChatViewProps {
  channelId?: string
  serverId?: string
}

interface Channel {
  id: string
  name: string
  topic?: string
}

export function ChatView({ channelId, serverId }: ChatViewProps) {
  const [channel, setChannel] = useState<Channel | null>(null)
  const [showMemberList, setShowMemberList] = useState(false)

  // Mock data - replace with real API call
  useEffect(() => {
    if (channelId) {
      // Simulate API call
      const mockChannel: Channel = {
        id: channelId,
        name: "general",
        topic: "General discussion for everyone"
      }
      setChannel(mockChannel)
    }
  }, [channelId])

  if (!channelId || !channel) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center text-gray-500">
          <Hash className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium mb-2">Select a channel</h3>
          <p className="text-sm">Choose a channel from the sidebar to start chatting</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Channel Header */}
      <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Hash className="h-5 w-5 text-gray-500" />
          <h2 className="font-semibold text-gray-900">{channel.name}</h2>
          {channel.topic && (
            <>
              <div className="w-px h-4 bg-gray-300" />
              <span className="text-sm text-gray-500">{channel.topic}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowMemberList(!showMemberList)}
          >
            <Users className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 flex flex-col">
          <MessageList channelId={channelId} />
          <MessageInput channelId={channelId} />
        </div>

        {/* Member List Sidebar */}
        {showMemberList && (
          <div className="w-60 bg-gray-50 border-l border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Members</h3>
            <div className="space-y-2">
              {/* Mock members */}
              {["Alice", "Bob", "Charlie", "Diana"].map((name) => (
                <div key={name} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
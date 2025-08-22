"use client"

import { useState, useEffect } from "react"
import { Hash, Volume2, Plus, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { cn } from "@/lib/utils"

interface Channel {
  id: string
  name: string
  type: "text" | "voice"
  category?: string
}

interface Server {
  id: string
  name: string
  channels: Channel[]
}

interface ChannelListProps {
  currentChannelId?: string
  currentServerId?: string
}

export function ChannelList({ currentChannelId, currentServerId }: ChannelListProps) {
  const [servers, setServers] = useState<Server[]>([])
  const [selectedServerId, setSelectedServerId] = useState<string>(currentServerId || "")

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockServers: Server[] = [
      {
        id: "1",
        name: "General Server",
        channels: [
          { id: "1", name: "general", type: "text" },
          { id: "2", name: "random", type: "text" },
          { id: "3", name: "dev-talk", type: "text" },
          { id: "4", name: "voice-chat", type: "voice" },
        ]
      },
      {
        id: "2", 
        name: "Gaming",
        channels: [
          { id: "5", name: "gaming-general", type: "text" },
          { id: "6", name: "game-voice", type: "voice" },
        ]
      }
    ]
    setServers(mockServers)
    if (!selectedServerId && mockServers.length > 0) {
      setSelectedServerId(mockServers[0].id)
    }
  }, [selectedServerId])

  const currentServer = servers.find(s => s.id === selectedServerId)

  const handleChannelClick = (channelId: string) => {
    window.location.href = `/servers/${selectedServerId}/channels/${channelId}`
  }

  return (
  
    <div className="flex flex-col h-full">
      {/* Server Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-semibold truncate">
            {currentServer?.name || "Select Server"}
          </h2>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Channels */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {/* Text Channels */}
          <div className="mb-4">
            <div className="flex items-center justify-between px-2 py-1 mb-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Text Channels
              </span>
              <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            {currentServer?.channels
              .filter(channel => channel.type === "text")
              .map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => handleChannelClick(channel.id)}
                  className={cn(
                    "w-full flex items-center space-x-2 px-2 py-1 rounded text-left text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",
                    currentChannelId === channel.id && "bg-gray-700 text-white"
                  )}
                >
                  <Hash className="h-4 w-4" />
                  <span className="text-sm">{channel.name}</span>
                </button>
              ))
            }
          </div>

          {/* Voice Channels */}
          <div>
            <div className="flex items-center justify-between px-2 py-1 mb-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Voice Channels
              </span>
              <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            {currentServer?.channels
              .filter(channel => channel.type === "voice")
              .map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => handleChannelClick(channel.id)}
                  className={cn(
                    "w-full flex items-center space-x-2 px-2 py-1 rounded text-left text-gray-300 hover:bg-gray-700 hover:text-white transition-colors",
                    currentChannelId === channel.id && "bg-gray-700 text-white"
                  )}
                >
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm">{channel.name}</span>
                </button>
              ))
            }
          </div>
        </div>
      </ScrollArea>

      {/* User Area */}
      <div className="p-3 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          Online: {Math.floor(Math.random() * 50) + 10} members
        </div>
      </div>
    </div>
  )
}
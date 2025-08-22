"use client"

import { useSession, signOut } from "next-auth/react"
import { ChannelList } from "./channel-list"
import { ChatView } from "./chat-view"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { LogOut, Settings } from "lucide-react"

interface DashboardLayoutProps {
  children?: React.ReactNode
  currentChannelId?: string
  currentServerId?: string
}

export function DashboardLayout({ 
  children, 
  currentChannelId, 
  currentServerId 
}: DashboardLayoutProps) {
  const { data: session } = useSession()

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold text-gray-900">OtterChat</h1>
          <span className="text-sm text-gray-500">
            {currentServerId ? "Server Name" : "Select a server"}
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={session?.user?.avatar_url || ""} />
              <AvatarFallback>
                {session?.user?.display_name?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-gray-700">
              {session?.user?.display_name}
            </span>
          </div>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => signOut()}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Channel List Sidebar */}
        <div className="w-64 bg-gray-800 flex flex-col">
          <ChannelList 
            currentChannelId={currentChannelId}
            currentServerId={currentServerId}
          />
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {children || (
            <ChatView 
              channelId={currentChannelId}
              serverId={currentServerId}
            />
          )}
        </div>
      </div>
    </div>
  )
}
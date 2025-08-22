"use client"

const { formatDistanceToNow } = require("date-fns");
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { avatar } from "@heroui/theme";
import { Smile, Reply, MoreHorizontal } from 'lucide-react';
import { Meera_Inimai } from "next/font/google";
import { useState } from "react"

export interface MessageProps{
    message:{
        id: string
        content: string
        author:{
            id: string
            username: string
            display_name: string
            avatar_url?: string
        }
        created_at: string
        updated_at: string
    }
}
export function Message({message}: MessageProps){
    const[showActions, setshowActions] = useState(false)
    const timeago = formatDistanceToNow(new Date(message.created_at), {addSuffix:true})

    return(
        <div className="group flex space-x-3 hover:bg color-gray-50 px-2 py-2 rounded-lg transition-colors relative"
            onMouseEnter={() => setshowActions(true)}
            onMouseLeave={() => setshowActions(false)}
            >
         //avatar
         <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={message.author.avatar_url} />
            <AvatarFallback>
                {message.author.display_name[0]?.toUpperCase()}
                </AvatarFallback> 

          </Avatar>     
          //message content
          <div className="flex-1 min-w-0">
            //author and timestamp
            <div>
                <span className="font-semibold text-gray-900 text-sm">
                    {message.author.display_name}
                </span>
                <span className="test-xs teext-gray-500">
                    {timeago}
                </span>
                {message.updated_at && (
                    <span className="text-xs text-gray-400">(edited)</span>
                )}

            </div>
            //message text
              <div className="text-gray-800 text-sm leading-relaxed break-words">
          {message.content}
        </div>
            
            </div>    
                {showActions && (
        <div className="absolute top-0 right-2 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Smile className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Reply className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      )}
            
        </div>
    )
}
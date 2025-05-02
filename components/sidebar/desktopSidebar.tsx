"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Avatar, Button, Switch, Tooltip } from "@heroui/react";
import { ThemeSwitch } from "../ThemeSwitch";
import Link from "next/link";

export default function DesktopSidebar() {
  return (
    <div className="hidden md:block">
         <div className="w-16 bg-content1 flex flex-col items-center py-4 px-2 border-r border-divider/40 h-screen">
      <Link href="/user" className="w-10 h-10 bg-primary-100 rounded-xl mb-8 flex items-center justify-center">
        <Icon icon="lucide:zap" className="text-primary" />
      </Link>
      
      <div className="flex flex-col items-center gap-6 flex-1">
        <Link href="/chat">
        
        <Tooltip content="Messages" placement="right">
          <Button isIconOnly variant="light" className="text-primary">
            <Icon icon="lucide:message-circle" width={24} />
          </Button>
        </Tooltip>
        </Link>
        
        <Tooltip content="Contacts" placement="right">
          <Button isIconOnly variant="light" className="text-default-500">
            <Icon icon="lucide:users" width={24} />
          </Button>
        </Tooltip>
        
        <Tooltip content="Calls" placement="right">
          <Button isIconOnly variant="light" className="text-default-500">
            <Icon icon="lucide:phone" width={24} />
          </Button>
        </Tooltip>
        
        <Tooltip content="Settings" placement="right">
          <Button isIconOnly variant="light" className="text-default-500">
            <Icon icon="lucide:settings" width={24} />
          </Button>
        </Tooltip>
      </div>
      
      <div className="mt-auto">
        <ThemeSwitch/>
      </div>
      
      <div className="mt-6">
        <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" />
      </div>
    </div>
    </div>
  )
}

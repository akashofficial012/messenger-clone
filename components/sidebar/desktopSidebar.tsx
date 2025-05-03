"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Avatar, Button, Tooltip } from "@heroui/react";
import Link from "next/link";
import { ThemeSwitch } from "../theme-switch";

export default function DesktopSidebar() {
  return (
    <div className="hidden md:block h-screen">
      <div className="w-16 h-screen bg-white border-r border-zinc-200 px-2 py-4 flex flex-col items-center
        dark:bg-zinc-900 dark:border-zinc-700">
        
        {/* Logo */}
        <Link
          href="/user"
          className="w-10 h-10 rounded-xl mb-8 flex items-center justify-center 
          bg-primary-100 dark:bg-primary-200/10"
        >
          <Icon icon="lucide:zap" className="text-primary dark:text-primary-300" />
        </Link>

        {/* Navigation Icons */}
        <div className="flex flex-col items-center gap-6 flex-1">
          
          <Tooltip content="Messages" placement="right">
            <Link href="/chat">
              <Button
                isIconOnly
                variant="light"
                className="text-primary dark:text-primary-300"
              >
                <Icon icon="lucide:message-circle" width={24} />
              </Button>
            </Link>
          </Tooltip>

          <Tooltip content="Contacts" placement="right">
            <Button isIconOnly variant="light" className="text-zinc-500 dark:text-zinc-300">
              <Icon icon="lucide:users" width={24} />
            </Button>
          </Tooltip>

          <Tooltip content="Calls" placement="right">
            <Button isIconOnly variant="light" className="text-zinc-500 dark:text-zinc-300">
              <Icon icon="lucide:phone" width={24} />
            </Button>
          </Tooltip>

          <Tooltip content="Settings" placement="right">
            <Button isIconOnly variant="light" className="text-zinc-500 dark:text-zinc-300">
              <Icon icon="lucide:settings" width={24} />
            </Button>
          </Tooltip>
        </div>

        {/* Theme Switch */}
        <div className="mt-auto">
          <ThemeSwitch/>
        </div>

        {/* Avatar */}
        <div className="mt-6">
          <Avatar src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" />
        </div>
      </div>
    </div>
  );
}

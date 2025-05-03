"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { GoTriangleLeft } from "react-icons/go";
import {
  Navbar, NavbarBrand, NavbarContent, Button, Input, Avatar, Card, CardBody, Tooltip, Link,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ChatMessages } from "@/components/chat-messages";

export default function ChatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const [message, setMessage] = React.useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && message.trim()) {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      
      {/* Header */}
      <Navbar className="bg-primary-600 text-white shadow-lg" maxWidth="xl">
        {isMobile && (
          <Button
            variant="light"
            radius="full"
            className="text-white"
            onClick={() => router.back()}
          >
            <GoTriangleLeft size={20} />
          </Button>
        )}
        <NavbarBrand className="gap-3">
          <Avatar
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
            className="border-2 border-white"
            size="sm"/>
          <div className="flex flex-col">
            <span className="font-bold text-white">Chat ID: {slug}</span>
            <Link
              href="https://abhirajk.vercel.app"
              target="_blank"
              className="text-xs text-blue-100 hover:text-white transition" >
              Visit Portfolio →
            </Link>
          </div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Tooltip content="Call">
            <Button isIconOnly variant="light" radius="full" className="text-white">
              <Icon icon="lucide:phone" width={20} />
            </Button>
          </Tooltip>
          <Tooltip content="Video">
            <Button isIconOnly variant="light" radius="full" className="text-white">
              <Icon icon="lucide:video" width={20} />
            </Button>
          </Tooltip>
          <Tooltip content="More">
            <Button isIconOnly variant="light" radius="full" className="text-white">
              <Icon icon="lucide:more-vertical" width={20} />
            </Button>
          </Tooltip>
        </NavbarContent>
      </Navbar>
      <div className="flex-grow overflow-y-auto px-2 py-4">
        <ChatMessages />
      </div>
        <div className="sticky w-full bg-slate-200 md:bottom-0 bottom-14  mx-auto flex items-center gap-2 px-4 py-2">
          <Tooltip content="Emoji">
            <Button isIconOnly variant="light" radius="full" className="text-default-500">
              <Icon icon="lucide:smile" width={22} />
            </Button>
          </Tooltip>
          <Tooltip content="Attachment">
            <Button isIconOnly variant="light" radius="full" className="text-default-500">
              <Icon icon="lucide:paperclip" width={22} />
            </Button>
          </Tooltip>
          <Input
            placeholder="Type your message..."
            value={message}
            onValueChange={setMessage}
            onKeyPress={handleKeyPress}
            radius="full"
            className="flex-1"
            classNames={{
              input: "text-sm",
              inputWrapper: "h-10",
            }}
            endContent={
              <Button
                isIconOnly
                color="primary"
                radius="full"
                size="sm"
                className="mr-0.5"
                isDisabled={!message.trim()}
                onPress={handleSendMessage}
              >
                <Icon icon="lucide:send" width={18} />
              </Button>
            }
          />
        </div>
    </div>
  );
}

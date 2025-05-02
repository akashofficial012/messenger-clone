"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Button, Tooltip } from "@heroui/react";

export default function MobileSidebar() {
  return (
    <div className="fixed  bottom-0 inset-x-0 bg-content1 border-t border-divider/40 flex justify-around items-center py-2 z-50 md:hidden">
      <Tooltip content="Messages" placement="top">
        <Button isIconOnly variant="light" className="text-primary">
          <Icon icon="lucide:message-circle" width={24} />
        </Button>
      </Tooltip>

      <Tooltip content="Contacts" placement="top">
        <Button isIconOnly variant="light" className="text-default-500">
          <Icon icon="lucide:users" width={24} />
        </Button>
      </Tooltip>

      <Tooltip content="Calls" placement="top">
        <Button isIconOnly variant="light" className="text-default-500">
          <Icon icon="lucide:phone" width={24} />
        </Button>
      </Tooltip>

      <Tooltip content="Settings" placement="top">
        <Button isIconOnly variant="light" className="text-default-500">
          <Icon icon="lucide:settings" width={24} />
        </Button>
      </Tooltip>
    </div>
  );
}

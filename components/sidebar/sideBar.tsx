"use client";

import { usePathname } from "next/navigation";
import DesktopSidebar from "./desktopSidebar";
import MobileSidebar from "./MobileSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ChatList from "../chat-list";

function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isChatPage = pathname.startsWith("/chat/");

  const shouldShowChatList = !(isMobile && isChatPage);

  return (
    <div  className="h-full md:flex w-full"
>
      <div className="hidden md:block">
        <DesktopSidebar />
      </div>
      <div className="block md:hidden">
        <MobileSidebar />
      </div>

      {/* Layout content */}
      {shouldShowChatList && (
        <div>
          <ChatList/>
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Sidebar;

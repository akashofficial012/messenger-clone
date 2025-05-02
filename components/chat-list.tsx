"use client";
import Link from "next/link";
import { User } from "@heroui/react";
import { FiSearch, FiRefreshCw } from "react-icons/fi";

const ChatList = () => {
  const chats = [
    {
      id: "123456789",
      name: "John Doe",
      message: "Hey! How are you?",
      time: "9:30",
      unreadCount: 2,
    },
    {
      id: "123456790",
      name: "Jane Smith",
      message: "Let's catch up later.",
      time: "9:32",
      unreadCount: 1,
    },
    {
      id: "123456791",
      name: "Alice Johnson",
      message: "Are you coming to the party?",
      time: "9:34",
      unreadCount: 0,
    },
    {
      id: "123456792",
      name: "Bob Brown",
      message: "Don't forget the meeting tomorrow.",
      time: "9:36",
      unreadCount: 0,
    },
  ];

  return (
    <div className=" w-full bg-[#F9FAFB] h-screen p-4 space-y-4 text-sm font-medium">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Chats</h2>
        <FiRefreshCw className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F1F5F9] focus:outline-none"
        />
        <FiSearch className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
      </div>

      <hr className="border-t border-gray-200" />

      {/* All Chats Section */}
      <div className="space-y-1">
        <p className="text-xs text-gray-400 mt-2">All Chats</p>

        {chats.map((chat) => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
           
            <div className="flex my-3 shadow-sm items-center justify-between bg-white rounded-xl p-3 cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <User
                  avatarProps={{
                    src: `https://i.pravatar.cc/150?u=${chat.id}`,
                  }}
                  name={chat.name}
                  description={chat.message}
                />
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{chat.time}</p>
                {chat.unreadCount > 0 && (
                  <span className="inline-block mt-1 bg-blue-500 text-white text-xs px-2 rounded-full">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatList;

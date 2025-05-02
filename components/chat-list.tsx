"use client" 
import { Avatar, User } from "@heroui/react";
import {
    FiSearch,
    FiArchive,
    FiRefreshCw,
  } from "react-icons/fi";
  
  const ChatList = () => {
    const chats = [
      {
        name: "John Doe",
        message: "Hey! How are you?",
        time: "9:30",
        unreadCount: 2,
      },
      {
        name: "Jane Smith",
        message: "Let's catch up later.",
        time: "9:32",
        unreadCount: 1,
      },
      {
        name: "Alice Johnson",
        message: "Are you coming to the party?",
        time: "9:34",
        unreadCount: 0,
      },
      {
        name: "Bob Brown",
        message: "Don't forget the meeting tomorrow.",
        time: "9:36",
        unreadCount: 0,
      },
    ];
    return (
      <div className="w-[350px] bg-[#F9FAFB] h-screen p-4 space-y-4 text-sm font-medium">
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
  
          {
            chats.map((chat, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white rounded-xl p-3 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
              <User
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
      name={chat.name}
      description={chat.message}
    />
        
                {/* <img src={chat.avatar} className="w-10 h-10 rounded-full" alt="avatar" /> */}
                {/* <div> */}
                  {/* <p className="font-semibold">{chat.name}</p> */}
                  {/* <p className="text-xs text-gray-500 truncate w-40">{chat.message}</p> */}
                {/* </div> */}
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{chat.time}</p>
                {chat.unreadCount && (
                  <span className="inline-block mt-1 bg-blue-500 text-white text-xs px-2 rounded-full">
                    {chat.unreadCount}
                  </span>
                )}
                {chat.unreadCount && !chat.unreadCount && (
                  <span className="inline-block mt-1 w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ChatList;
  
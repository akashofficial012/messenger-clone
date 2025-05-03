import React from "react";
import { Avatar } from "@heroui/react";
import { TypingIndicator } from "./typing-indicator";

interface Message {
  id: string;
  text: string;
  sender: "user" | "contact";
  time: string;
}

export const ChatMessages: React.FC = () => {
  const [messages] = React.useState<Message[]>([
    {
      id: "1",
      text: "Hi there! Welcome to my portfolio chat. Feel free to explore my work at abhirajk.vercel.app",
      sender: "contact",
      time: "11:42 AM"
    },
    {
      id: "2",
      text: "Amazing work! I'm impressed with your projects and technical skills.",
      sender: "user",
      time: "11:43 AM"
    },
    {
      id: "3",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "4",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "5",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "6",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "7",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "8",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "9",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "10",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "11",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "12",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    },
    {
      id: "13",
      text: "Thank you! I specialize in full-stack development using modern technologies. Would you like to discuss a potential collaboration?",
      sender: "contact",
      time: "11:44 AM"
    }
  ]);
  
  return (
    <div className="space-y-4  w-full ">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={`flex items-start gap-2 ${
            message.sender === "user" ? "justify-end" : ""
          }`}
        >
          {message.sender === "contact" && (
            <Avatar 
              src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" 
              className="mt-1"
              size="sm"
            />
          )}
          
          <div className={`flex flex-col ${message.sender === "user" ? "items-end" : ""}`}>
            <div 
              className={`p-3 shadow-sm max-w-md rounded-lg ${
                message.sender === "user" 
                  ? "bg-primary-600 text-white rounded-tr-none" 
                  : "bg-white rounded-tl-none"
              }`}
            >
              <p className="text-sm">
                {message.text.includes("abhirajk.vercel.app") ? (
                  <>
                    Hi there! Welcome to my portfolio chat. Feel free to explore my work at{" "}
                    <a 
                      href="https://abhirajk.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      abhirajk.vercel.app
                    </a>
                  </>
                ) : (
                  message.text
                )}
              </p>
            </div>
            <span className="text-gray-500 text-xs mt-1">{message.time}</span>
          </div>
          
          {message.sender === "user" && (
            <Avatar 
              src="https://img.heroui.chat/image/avatar?w=200&h=200&u=2" 
              className="mt-1"
              size="sm"
            />
          )}
        </div>
      ))}
      
      {/* Typing Indicator */}
      <div className="flex items-start gap-2">
        <Avatar 
          src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" 
          className="mt-1"
          size="sm"
        />
        <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm">
          <TypingIndicator />
        </div>
      </div>
    </div>
  );
};
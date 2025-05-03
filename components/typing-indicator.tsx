import React from "react";

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="typing-indicator flex">
        <span className="h-2 w-2 bg-gray-400 rounded-full mx-0.5 animate-pulse" style={{ animationDelay: "0s" }}></span>
        <span className="h-2 w-2 bg-gray-400 rounded-full mx-0.5 animate-pulse" style={{ animationDelay: "0.2s" }}></span>
        <span className="h-2 w-2 bg-gray-400 rounded-full mx-0.5 animate-pulse" style={{ animationDelay: "0.4s" }}></span>
      </div>
    </div>
  );
};
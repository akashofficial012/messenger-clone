import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  provider: string;
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 rounded-md bg-gray-100 py-3 text-gray-700 transition-colors hover:bg-blue-500 hover:text-white active:bg-blue-700 shadow-md"
    >
      <Icon size={20} />
    
    </button>
  );
};

export default AuthSocialButton;

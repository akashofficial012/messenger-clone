import React from "react";
import { Icon } from "@iconify/react";
import { Switch } from "@heroui/react";

export const ThemeSwitch = () => {

  
  return (
    <Switch 
      size="sm" 
      startContent={<Icon icon="lucide:sun" className="text-default-500"  />}
      endContent={<Icon icon="lucide:moon" className="text-default-500" />}
    />
  );
};
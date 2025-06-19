"use client";

import { toggleGroupModal } from "@/components/feature/group";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export const GroupSettingTrigger = () => {
  const handleGroupSet = () => {
    toggleGroupModal();
  };

  return (
    <Button
      onClick={handleGroupSet}
      title="Select a Chat Group from the below list first."
    >
      <Settings />
    </Button>
  );
};

"use client";

import { toggleGroupModal } from "@/components/feature/group";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export const GroupSettingTrigger = () => {
  return (
      <Button onClick={toggleGroupModal}>
          <Settings />
      </Button>
  )
}
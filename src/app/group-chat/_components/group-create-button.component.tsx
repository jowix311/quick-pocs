"use client";

import { toggleGroupModal } from "@/components/feature/group";
import { Button } from "@/components/ui/button";

export const GroupCreateButton = () => {
  const handleGroupSet = () => {
    toggleGroupModal();
  };

  return <Button onClick={handleGroupSet}>Creat New Group</Button>;
};

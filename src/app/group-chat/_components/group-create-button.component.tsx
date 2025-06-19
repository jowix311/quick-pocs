"use client";

import { GroupFormMode, openGroupModal, toggleGroupModal } from "@/components/feature/group";
import { Button } from "@/components/ui/button";

export const GroupCreateButton = () => {
  const handleGroupSet = () => {
    openGroupModal({
      formMode: GroupFormMode.CREATE
    });
  };

  return <Button onClick={handleGroupSet}>Creat New Group</Button>;
};

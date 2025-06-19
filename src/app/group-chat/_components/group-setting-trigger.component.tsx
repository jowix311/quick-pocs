"use client";

import { useGroupFormModal,
  GroupFormMode,
  openGroupModal,
} from "@/components/feature/group";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export const GroupSettingTrigger = () => {
  const handleGroupSet = () => {
    openGroupModal({
      formMode: GroupFormMode.EDIT,
    });
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

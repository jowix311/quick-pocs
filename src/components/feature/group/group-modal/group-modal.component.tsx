"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useGroupModal } from "./use-group-moodal";
import { toggleGroupModal } from "./group-modal.store";

export const GroupModal = ({ children }: { children: React.ReactNode }) => {
  const { isShowModal } = useGroupModal();

  return (
    <Dialog open={isShowModal} onOpenChange={toggleGroupModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="hidden">Group Form Modal</DialogTitle>
          <DialogDescription className="hidden">
            Group Form Modal
          </DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGroupFormModal } from "./use-group-form-modal";
import { toggleGroupModal } from "./group-form-modal.store";
import { GroupForm } from "../group-form";

export const GroupFormModal = () => {
  const { isShowModal, formMode } = useGroupFormModal();

  return (
    <Dialog open={isShowModal} onOpenChange={toggleGroupModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="hidden">Group Form Modal</DialogTitle>
          <DialogDescription className="hidden">
            Group Form Modal
          </DialogDescription>
          <div className="pt-3">
            <GroupForm formMode={formMode} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export enum GroupFormMode {
  CREATE = "create",
  EDIT = "edit",
}

type GroupModalStore = {
  isOpen: boolean;
  formMode: GroupFormMode;
};

const initialStoreValue: GroupModalStore = {
  isOpen: false,
  formMode: GroupFormMode.CREATE,
};

// Create the store with selecto
export const useGroupModalStore = create<GroupModalStore>()(
  subscribeWithSelector(() => ({
    ...initialStoreValue,
  }))
);

export const toggleGroupModal = () => {
  useGroupModalStore.setState((state) => ({
    isOpen: !state.isOpen,
  }));
};

export const openGroupModal = ({ formMode }: { formMode: GroupFormMode }) => {
  useGroupModalStore.setState((state) => ({
    isOpen: true,
    formMode,
  }));
};

export const closeGroupModal = () => {
  useGroupModalStore.setState((state) => ({
    isOpen: false,
  }));
};

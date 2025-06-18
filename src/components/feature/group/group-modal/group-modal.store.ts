import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type GroupModalStore = {
  isOpen: boolean;
};

const initialStoreValue: GroupModalStore = {
  isOpen: false
}

// Create the store with selecto
export const useGroupModalStore = create<GroupModalStore>()(subscribeWithSelector(() => (
  {
    ...initialStoreValue
  }
)));

export const toggleGroupModal = () => {
  useGroupModalStore.setState((state) => ({
    isOpen: !state.isOpen
  }))
}

export const closeGroupModal = () => {
  useGroupModalStore.setState((state) => ({
    isOpen: false
  }))
}
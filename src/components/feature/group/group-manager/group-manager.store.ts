import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

// TODO: This just a dummy type, finalize this
export type MemberInfo = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

type GroupManagerStore = {
  chatId: string;
  groupName: string;
  members: MemberInfo[];
};

const initialStoreValue: GroupManagerStore = {
  chatId: "",
  groupName: "",
  members: [],
};

// Create the store with selector
export const useGroupManagerStore = create<GroupManagerStore>()(
  subscribeWithSelector(() => ({
    ...initialStoreValue,
  }))
);

export const setGroupChatData = ({
  chatId,
  groupName,
  members,
}: GroupManagerStore) => {
  useGroupManagerStore.setState({
    chatId,
    groupName,
    members,
  });
};

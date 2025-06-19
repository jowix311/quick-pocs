"use client";

import { useEffect, useState } from "react";
import { GroupFormMode, useGroupModalStore } from "./group-form-modal.store";

export const useGroupFormModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [formMode, setIsFormMode] = useState(GroupFormMode.CREATE);

  // Check the store
  useEffect(() => {
    const sub = useGroupModalStore.subscribe(
      (state) => state.isOpen,
      (isOpen) => {
        setIsShowModal(isOpen);
        setIsFormMode(useGroupModalStore.getState().formMode);
      }
    );

    return sub;
  }, []);

  return {
    isShowModal,
    formMode
  };
};

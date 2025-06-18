import { useEffect, useState } from "react";
import { useGroupModalStore } from "./group-modal.store";

export const useGroupModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const name = "xxx";

  // Check the store
  useEffect(() => {
    const sub = useGroupModalStore.subscribe((state) => state.isOpen, (isOpen) => {
      setIsShowModal(isOpen);
    });

    return sub;
  }, []);


  return {
    isShowModal,
    name
  }
}


import { useFieldArray, useForm } from "react-hook-form";
import { groupFormSchema, GroupFormSchema } from "./group-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useGroupManagerStore } from "../group-manager";
import { GroupFormMode } from "../group-form-modal";
import { GroupForm } from "./group-form.component";

export const useGroupForm = ({ formMode }: { formMode?: GroupFormMode }) => {
  const form = useForm<GroupFormSchema>({
    resolver: zodResolver(groupFormSchema),
    defaultValues: {
      groupName: "",
      members: [],
    },
  });

  // Prepare dynamic field for members
  const {
    fields: members,
    append: membersAppend,
    remove: membersRemove,
  } = useFieldArray({ name: "members", control: form.control });

  const onSubmit = (values: GroupFormSchema) => {
    // TODO: Connect to API and update logic
    console.log("group form", values);
  };

  // Handle modal initialziation
  useEffect(() => {
    const { chatId, groupName, members } = useGroupManagerStore.getState();

    if (!chatId) {
      form.reset();
      return;
    }

    if (formMode === GroupFormMode.CREATE || !formMode) {
      form.reset();
    } else {
      form.setValue("groupName", groupName);
      form.setValue("members", members);
    }
  }, []);

  return {
    form,
    onSubmit,
    members,
    membersAppend,
    membersRemove,
  };
};

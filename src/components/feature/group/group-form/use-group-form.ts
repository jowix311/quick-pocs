import { useForm } from "react-hook-form";
import { groupFormSchema, GroupFormSchema } from "./group-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useGroupForm = () => {

  const form = useForm<GroupFormSchema>({
    resolver: zodResolver(groupFormSchema),
    defaultValues: {
      groupName: "",
      members: []
    }
  })
    ;

  const onSubmit = (values: GroupFormSchema) => {
    console.log("group form", values)
  }

  return {
    form,
    onSubmit
  }
};
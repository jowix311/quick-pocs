import z from "zod";

// TODO: Upddate accordingly
export const groupMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email()
});

export const groupFormSchema = z.object({
  groupName: z.string(),
  members: z.array(groupMemberSchema)
});

export type GroupFormSchema = z.infer<typeof groupFormSchema>;

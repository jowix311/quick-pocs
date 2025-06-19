import z from "zod";

// TODO: Upddate accordingly
export const groupMemberSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  avatar: z.string().optional(),
});

export const groupFormSchema = z.object({
  groupName: z.string().min(1, "Pleae enter a Group Name."),
  members: z.array(groupMemberSchema).min(1, "Please at least one member,"),
});

export type GroupFormSchema = z.infer<typeof groupFormSchema>;

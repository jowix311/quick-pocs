"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useGroupForm } from "./use-group-form";
import { Input } from "@/components/ui/input";
import {
  GroupUser,
  GroupUserAction,
  GroupUserAvatar,
  GroupUserDetail,
} from "../group-user";
import { UserInfo } from "./group-form.types";
import { Button } from "@/components/ui/button";
import { GroupFormMode } from "../group-form-modal";
import { UserSearch } from "@/components/feature/user-search";


export const GroupForm = ({ formMode }: { formMode?: GroupFormMode }) => {
  const { form, onSubmit, members, membersAppend, membersRemove } =
    useGroupForm({ formMode });

  const handleUserSelect = (user: UserInfo) => {
    membersAppend(user);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="groupName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter a group name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <UserSearch
          onUserSelect={handleUserSelect}
          hasError={!!form.formState.errors.members}
        />

        <GroupMembers
          members={members}
          onMemberAppend={membersAppend}
          onMemberRemove={membersRemove}
        />

        <div className="flex justify-center">
          <Button className="inline-flex flex-end">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

const GroupMembers = ({
  members,
  onMemberRemove,
}: {
  members: ReturnType<typeof useGroupForm>["members"];
  onMemberAppend: ReturnType<typeof useGroupForm>["membersAppend"];
  onMemberRemove: ReturnType<typeof useGroupForm>["membersRemove"];
}) => {
  if (members.length === 0) {
    return <p className="text-center text-gray-300">No group members yet.</p>;
  }
  return (
    <section>
      <p className="text-2xl font-semibold">Members:</p>
      <div className="flex flex-col gap-1 pb-5 max-h-[300px] overflow-y-auto">
        {members.map((member, index) => {
          const { id, name, email, avatar } = member;
          return (
            <GroupUser key={id} className="shadow-md p-5 rounded-md">
              <GroupUserAvatar imageSource={avatar || ""} />
              <GroupUserDetail>
                <p>{name}</p>
                <p>{email}</p>
              </GroupUserDetail>
              <GroupUserAction
                action="remove"
                onUserAction={() => {
                  onMemberRemove(index);
                  // TODO: Update logic based on BE
                }}
              />
            </GroupUser>
          );
        })}
      </div>
    </section>
  );
};

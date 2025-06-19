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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  GroupUser,
  GroupUserAction,
  GroupUserAvatar,
  GroupUserDetail,
} from "../group-user";
import { UserInfo } from "./group-form.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GroupFormMode } from "../group-form-modal";

/**
 * TODO
 * 1. Integrate with form
 * 2. Typeahead toggle hide when less than 3 characters
 * 3. Typeahead integrate to API
 * 4. Typeahead disable item when selected
 */

// TODO: Remove dummy data
const userList: UserInfo[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane.doe@email.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "3",
    name: "Bob Smith",
    email: "bob.smith@email.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "7",
    name: "Johnny Mann",
    email: "Johnny.man@email.com",
    avatar: "https://github.com/shadcn.png",
  },
];
// TODO: End remove dummy data

export const GroupForm = ({ formMode }: { formMode?: GroupFormMode }) => {
  const { form, onSubmit, members, membersAppend, membersRemove } =
    useGroupForm({ formMode });
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // TODO: Update logic and connect to API
  const handleUserAction = () => {
    setShowSuggestions(false);
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

        <section>
          <Popover open={showSuggestions} onOpenChange={setShowSuggestions}>
            <Command
              className={cn("rounded-lg border shadow-md h-auto", {
                "border-destructive focus:ring-destructive":
                  form.formState.errors.members,
              })}
              shouldFilter={false}
              onWheel={(event) => {
                event.stopPropagation(); // This will allow mousewhell scroll, Normally this should not be here, might the way this was implemented with Command.
              }}
            >
              <PopoverTrigger asChild>
                <CommandInput
                  placeholder="Type to search..."
                  onValueChange={(value) => {
                    setSearchValue(value);

                    if (value.trim().length > 2) {
                      setShowSuggestions(true);
                    } else {
                      setShowSuggestions(false);
                    }
                  }}
                  value={searchValue}
                  onClickCapture={(event) => {
                    // This prevents the popover when clicking the input, not sure for side effects yet
                    event.preventDefault();
                  }}
                />
              </PopoverTrigger>
              <PopoverContent
                asChild
                onOpenAutoFocus={(event) => event.preventDefault()}
                className="p-0 w-[var(--radix-popover-trigger-width)] bg-white "
              >
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {userList.map((user) => {
                      const { id, name, email, avatar } = user;

                      return (
                        <CommandItem key={id} value={`${name} ${email}`}>
                          <GroupUser className="shadow-md p-5 rounded-md">
                            <GroupUserAvatar imageSource={avatar} />
                            <GroupUserDetail>
                              <p>{name}</p>
                              <p>{email}</p>
                            </GroupUserDetail>
                            <GroupUserAction
                              action="add"
                              onUserAction={() => {}}
                            />
                          </GroupUser>
                        </CommandItem>
                      );
                    })}
                    {/* </div> */}
                  </CommandGroup>
                </CommandList>
              </PopoverContent>
            </Command>
          </Popover>

          <FormField
            control={form.control}
            name="members"
            render={() => (
              <FormItem className="mt-2">
                <FormMessage />
              </FormItem>
            )}
          />

          <GroupMembers members={members} />
        </section>

        <div className="flex justify-center">
          <Button className="inline-flex flex-end">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

const GroupMembers = ({
  members,
}: {
  members: ReturnType<typeof useGroupForm>["members"];
  onRemoveMember?: ReturnType<typeof useGroupForm>["membersRemove"];
}) => {
  if (members.length === 0) {
    return <p className="text-center text-gray-300">No group members yet.</p>;
  }
  return (
    <section>
      <p className="text-2xl font-semibold">Members:</p>
      <div className="flex flex-col gap-1 pb-5 max-h-[300px] overflow-y-auto">
        {members.map((member) => {
          const { id, name, email, avatar } = member;
          return (
            <GroupUser key={id} className="shadow-md p-5 rounded-md">
              <GroupUserAvatar imageSource={avatar || ""} />
              <GroupUserDetail>
                <p>{name}</p>
                <p>{email}</p>
              </GroupUserDetail>
              <GroupUserAction action="remove" onUserAction={() => {}} />
            </GroupUser>
          );
        })}
      </div>
    </section>
  );
};

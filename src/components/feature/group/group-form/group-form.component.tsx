"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { ChangeEvent, useState } from "react";
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

/**
 * TODO
 * 1. Integrate with form
 * 2. Typeahead toggle hide when less than 3 characters
 * 3. Typeahead integrate to API
 * 4. Typeahead disable item when selected
 *
 *
 *
 *
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
const members: UserInfo[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "4",
    name: "Billy",
    email: "billy@email.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "5",
    name: "Wilkins",
    email: "wilkins@email.com",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "6",
    name: "Joe",
    email: "joe@email.com",
    avatar: "https://github.com/shadcn.png",
  },
];
// TODO: End remove dummy data

export const GroupForm = () => {
  const { form, onSubmit } = useGroupForm();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // TODO: Update logic
  const handleUserAction = () => {
    setShowSuggestions(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* <FormField
          control={form.control}
          name="groupName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search</FormLabel>
              <FormControl>
                <Input placeholder="Type to search user..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Popover open={showSuggestions} onOpenChange={setShowSuggestions}>
          <Command
            className="rounded-lg border shadow-md h-auto"
            shouldFilter={false}
            onWheel={(event) => {
              event.stopPropagation(); // This will allow mousewhell scroll, Ideally this shoul no be here.
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
                  // event.preventDefault();
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
                  {/* <div className="flex flex-col gap-1"> */}
                  {/* <CommandItem>
                      <GroupUser>
                        <GroupUserAvatar imageSource="https://github.com/shadcn.png" />
                        <GroupUserDetail>
                          <p>John Doe</p>
                          <p>john.doe@email.com</p>
                        </GroupUserDetail>
                        <GroupUserAction
                          action="add"
                          onUserAction={handleUserAction}
                        />
                      </GroupUser>
                    </CommandItem> */}
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
                            action="remove"
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

        <GroupMembers members={members} />
      </form>
    </Form>
  );
};

const GroupMembers = ({ members }: { members: UserInfo[] }) => {
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
              <GroupUserAvatar imageSource={avatar} />
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

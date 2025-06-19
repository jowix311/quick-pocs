import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { useUserSearch } from "./use-user-search";

import { cn } from "@/lib/utils";
import {
  GroupUser,
  GroupUserAction,
  GroupUserAvatar,
  GroupUserDetail,
  UserInfo,
} from "../group";

export const UserSearch = ({
  onUserSelect,
  hasError,
}: {
  onUserSelect: (user: UserInfo) => void;
  hasError?: boolean;
}) => {
  const {
    searchValue,
    showSuggestions,
    handleSearchChange,
    clearSearch,
    setShowSuggestions,
    userList,
  } = useUserSearch();

  const handleUserAction = (user: UserInfo) => {
    onUserSelect(user);
    clearSearch();
  };

  return (
    <Popover open={showSuggestions} onOpenChange={setShowSuggestions}>
      <Command
        className={cn(
          "rounded-lg border shadow-md h-auto transition-[color,box-shadow] outline-none",
          "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
          {
            "border-destructive ring-destructive/20 dark:ring-destructive/40":
              hasError,
            "focus-within:border-destructive focus-within:ring-destructive/20 dark:focus-within:ring-destructive/40":
              hasError,
          }
        )}
        shouldFilter={false}
        onWheel={(event) => {
          event.stopPropagation();
        }}
      >
        <PopoverTrigger asChild>
          <CommandInput
            placeholder="Type to search..."
            onValueChange={handleSearchChange}
            value={searchValue}
            onClickCapture={(event) => {
              event.preventDefault();
            }}
          />
        </PopoverTrigger>
        <PopoverContent
          asChild
          onOpenAutoFocus={(event) => event.preventDefault()}
          className="p-0 w-[var(--radix-popover-trigger-width)] bg-white"
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
                        onUserAction={() => handleUserAction(user)}
                      />
                    </GroupUser>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </PopoverContent>
      </Command>
    </Popover>
  );
};

"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useGroupForm } from "./use-group-form";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ChangeEvent, Dispatch, FormEvent, FormEventHandler, SetStateAction, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Key, SmilePlus } from "lucide-react";
import { CommandDialog } from "cmdk";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";

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


export const GroupForm = () => {
  const { form, onSubmit } = useGroupForm();

  const [searchValue, setSearchBValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);



  return <Form {...form}>
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
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <PopoverTrigger asChild>
            <CommandInput placeholder="Type to search..."
              onChangeCapture={
                (e: ChangeEvent<HTMLInputElement>) => {
                  console.log(
                    "Check...", e.target.value
                  )
                  const currentValue = e.target.value.trim();

                  if(currentValue.length > 2) {
                    setShowSuggestions(true);
                  } else {
                    setShowSuggestions(false);
                  }
                }
              }
              onClickCapture={(e) => {
                // This prevents the popover when clicking the input, not sure for side effects yet
                e.preventDefault();
              }}

            />
          </PopoverTrigger>
          <PopoverContent asChild onOpenAutoFocus={(event) => event.preventDefault()} className="p-0 w-[var(--radix-popover-trigger-width)] bg-white">
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <div className="flex flex-col gap-1">
                  <CommandItem>
                    <UserInfo setShowSuggestions={setShowSuggestions} />
                  </CommandItem>
                  <CommandItem>
                    <UserInfo setShowSuggestions={setShowSuggestions} />
                  </CommandItem>
                  <CommandItem>
                    <UserInfo setShowSuggestions={setShowSuggestions} />
                  </CommandItem>
                </div>
              </CommandGroup>
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>
    </form>
  </Form>
}




const UserInfo = ({setShowSuggestions}: {
  setShowSuggestions: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p>John Doe</p>
        <p>john.doe@email.com</p>
      </div>
      <div>
        <Button type="button" variant="outline" onClick={() => {
          setShowSuggestions(false);
        }}>
          <SmilePlus />
        </Button>
      </div>
    </div>
  );
}
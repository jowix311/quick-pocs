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
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SmilePlus } from "lucide-react";
import { CommandDialog } from "cmdk";

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
      <Command  className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Type to search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Enter")
            }
          }}

        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <div className="flex flex-col gap-1">
              <CommandItem>
                <UserInfo />
              </CommandItem>
              <CommandItem>
                <UserInfo />
              </CommandItem>
              <CommandItem>
                <UserInfo />
              </CommandItem>
            </div>
          </CommandGroup>
        </CommandList>
      </Command>
    </form>
  </Form>
}




const UserInfo = () => {
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
        <Button type="button" variant="outline" className="!hover:text-red-100">
          <SmilePlus />
        </Button>
      </div>
    </div>
  );
}
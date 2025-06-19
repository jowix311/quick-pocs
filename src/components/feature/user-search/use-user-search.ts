import { useDeferredValue, useEffect, useState } from "react";
import { UserInfo } from "../group";

// TODO: Remove dummy data and connect to API
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

export const useUserSearch = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const deferredSearchValue = useDeferredValue(searchValue);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setShowSuggestions(value.trim().length > 2); // At lest three characters before showing the popover list
  };

  const clearSearch = () => {
    setSearchValue("");
    setShowSuggestions(false);
  };

  const closeSuggestions = () => {
    setShowSuggestions(false);
  };

  // Show suggestions based on deferred value and must be greater than 3 characters
  useEffect(() => {
    setShowSuggestions(deferredSearchValue.trim().length > 3);
  }, [deferredSearchValue]);

  return {
    showSuggestions,
    searchValue,
    handleSearchChange,
    clearSearch,
    closeSuggestions,
    setShowSuggestions,
    userList,
  };
};

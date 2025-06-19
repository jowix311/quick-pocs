"use client";

import { setGroupChatData } from "@/components/feature/group";
import { Button } from "@/components/ui/button";

//TODO: Update logic
export const GroupList = () => {
  return (
    <>
      <p className="text-xl mb-1">Chat Groups:</p>
      <ul className="space-y-1">
        <li>
          <Button
            variant="outline"
            onClick={() => {
              setGroupChatData({
                chatId: "X341d12OMDHJ",
                groupName: "Foodies",
                members: [
                  {
                    id: "22",
                    name: "Mario",
                    email: "mario.test@me.com",
                    avatar: "https://github.com/shadcn.png",
                  },
                  {
                    id: "23",
                    name: "Luigi",
                    email: "luigi.test@me.com",
                    avatar: "https://github.com/shadcn.png",
                  },
                  {
                    id: "24",
                    name: "Ken",
                    email: "Ken.test@me.com",
                    avatar: "https://github.com/shadcn.png",
                  },
                ],
              });
            }}
          >
            Foodies
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            onClick={() => {
              setGroupChatData({
                chatId: "X341d12OMDHZZ",
                groupName: "Cleaners",
                members: [
                  {
                    id: "32",
                    name: "Ricardo",
                    email: "ricardo.test@me.com",
                    avatar: "https://github.com/shadcn.png",
                  },
                  {
                    id: "33",
                    name: "Marco",
                    email: "marco.test@me.com",
                    avatar: "https://github.com/shadcn.png",
                  },
                ],
              });
            }}
          >
            Cleaners
          </Button>
        </li>
      </ul>
    </>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { CommonProps } from "@/lib/utils";
import { SmilePlus, UserMinus } from "lucide-react";

export const GroupUserAction = ({
  onUserAction,
  action,
}: CommonProps & {
  onUserAction: () => void;
  action: "add" | "remove";
}) => {
  return (
    <Button type="button" variant="outline" onClick={onUserAction}>
      {action === "add" ? <SmilePlus /> : <UserMinus />}
    </Button>
  );
};

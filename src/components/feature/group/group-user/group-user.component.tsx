import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, CommonProps } from "@/lib/utils";

export const GroupUser = ({ children, className }: CommonProps) => {
  return (
    <div className={cn("flex justify-between w-full items-center", className)}>
      {children}
    </div>
  );
};

export const GroupUserAvatar = ({
  imageSource,
}: CommonProps & {
  imageSource: string;
}) => {
  return (
    <div>
      <Avatar>
        <AvatarImage src={imageSource} />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
    </div>
  );
};

export const GroupUserDetail = ({ children }: CommonProps) => {
  return <div>{children}</div>;
};

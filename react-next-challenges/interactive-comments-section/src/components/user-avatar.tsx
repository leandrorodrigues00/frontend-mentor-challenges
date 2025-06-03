import { AvatarProps } from "@radix-ui/react-avatar";

import { UserConfig } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileIcon } from "@/components/icons";

interface UserAvatarProps extends AvatarProps {
  user: UserConfig;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image.png ? (
        <AvatarImage alt="Picture" src={user.image.png} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.username}</span>
          <ProfileIcon className="h-6 w-6 fill-current" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}

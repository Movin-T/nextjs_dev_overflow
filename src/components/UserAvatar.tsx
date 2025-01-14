import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import { Avatar, AvatarFallback } from "./ui/avatar";

const UserAvatar = ({
  id,
  name,
  imageUrl,
  className = "h-9 w-9",
}: {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={className}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            className="object-cover"
            width={36}
            height={36}
            quality={100}
          />
        ) : (
          <AvatarFallback className="primary-gradient font-space-grotesk tracking-wider text-white">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
};

export default UserAvatar;

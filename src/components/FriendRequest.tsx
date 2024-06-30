import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

type FriendRequestProps = {
  userId: string;
  avatar: string;
  name: string;
};

const FriendRequest: FC<FriendRequestProps> = ({ userId, avatar, name }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link className="flex items-center gap-3" href={`/profile/${userId}`}>
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full size-10 object-cover"
        />
        <span className="font-semibold">{name}</span>
      </Link>
      <div className="flex gap-3 justify-end">
        <FaCheckCircle className="size-5 text-blue-400 cursor-pointer" />
        <FaCircleXmark className="size-5 text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default FriendRequest;

import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { User } from "@prisma/client";

type UserMediaCardProps = {
  user: User;
};

const UserMediaCard: FC<UserMediaCardProps> = ({ user }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full">
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>{" "}
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>{" "}
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>{" "}
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>{" "}
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="h-24 relative col-span-1 row-span-1">
          <Image
            src="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;

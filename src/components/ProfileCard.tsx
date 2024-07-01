import React from "react";
import Image from "next/image";
import { BsPeopleFill } from "react-icons/bs";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { abbreviateNumber } from "@/lib/utils";
import Link from "next/link";

const ProfileCard = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: { followers: true },
      },
    },
  });

  if (!user) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={user?.cover || "/noCover.png"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user?.avatar || "/noAvatar.png"}
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">
          {user.name || user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex">
            <BsPeopleFill className="size-3 text-blue-400" />
          </div>
          <div className="text-xs text-gray-500">
            {abbreviateNumber(user._count.followers)} Followers
          </div>
        </div>
        <Link
          href={`/profile/${user.username}`}
          className="bg-blue-500 text-white text-xs p-2 rounded-md"
        >
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;

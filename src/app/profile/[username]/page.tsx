import { LeftMenu, RightMenu } from "@/components";
import React from "react";
import Image from "next/image";
import { abbreviateNumber } from "@/lib/utils";
import prisma from "@/lib/client";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Feed from "@/components/Feed";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
    include: {
      _count: {
        select: { followers: true, followings: true, posts: true },
      },
    },
  });

  console.log(user);

  if (!user) return notFound();

  const { userId: currentUserId } = auth();

  let isBlocked;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if (isBlocked) return notFound();

  return (
    <div>
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-1/2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src={user?.cover || "/noCover.png"}
                  alt="user cover"
                  fill
                  className="rounded-md object-cover"
                />
                <Image
                  src={user?.avatar || "/noAvatar.png"}
                  alt="profile picture"
                  width={128}
                  height={128}
                  className="rounded-full object-cover size-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10"
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">
                {user.name || user.surname
                  ? user.name + " " + user.surname
                  : user.username}
              </h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">
                    {abbreviateNumber(user._count.posts)}
                  </span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">
                    {abbreviateNumber(user._count.followers)}
                  </span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">
                    {abbreviateNumber(user._count.followings)}
                  </span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu user={user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

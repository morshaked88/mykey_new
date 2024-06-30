import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGift } from "react-icons/fa";

type BirthdayProps = {
  userId: string;
  avatar: string;
  name: string;
};

const Birthday: FC<BirthdayProps> = ({ userId, avatar, name }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-4">
      <div className="flex justify-between items-center w-full">
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
          <button className="bg-blue-500 rounded-md text-white text-xs p-2">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 w-full">
        <FaGift className="size-10 text-gray-400" />
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-700">Upcoming Birthdays</span>
            <p className="text-xs text-muted-foreground">{`See other ${16} have upcoming birtydays`}</p>
        </div>
      </div>
    </div>
  );
};

export default Birthday;

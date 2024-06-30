import Link from "next/link";
import React, { FC } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";

type UserInformationCardProps = {
  userId: string;
};

const UserInformationCard: FC<UserInformationCardProps> = ({ userId }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <span className="text-xl font-medium text-black">Bruce Wayne</span>
          <span className="text-muted-foreground text-sm">{`@username`}</span>
        </div>
        <p className="text-muted-foreground line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          facilis ad consequatur itaque in aut ab dolorem. Quia consequatur
          tempore similique quam debitis, minima ad asperiores perspiciatis et
          non maxime.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-muted-foreground size-4" />
            <span className="text-muted-foreground">
              Living in <b>{"Gotham City"}</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IoIosSchool className="text-muted-foreground size-4" />
            <span className="text-muted-foreground">
              Went to <b>{"Habsor High School"}</b>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdWork className="text-muted-foreground size-4" />
            <span className="text-muted-foreground">
              Work at <b>{"Apple inc."}</b>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IoIosLink className="text-muted-foreground size-4" />
            <Link href="/" className="text-blue-500 hover:underline">
              bruce.wayne
            </Link>
          </div>
          <div className="text-muted-foreground gap-1 flex items-center">
            <CiCalendarDate className="size-4" />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 py-2 rounded-md text-white text-sm">
          Following
        </button>
        <button className="text-red-400 text-xs self-end">Block User</button>
      </div>
    </div>
  );
};

export default UserInformationCard;

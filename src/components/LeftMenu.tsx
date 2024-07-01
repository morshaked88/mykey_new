import { FC } from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import { PiNotePencilBold, PiNewspaperFill } from "react-icons/pi";
import { GiMountainRoad, GiShop, GiCalendar } from "react-icons/gi";
import { BiPhotoAlbum } from "react-icons/bi";
import { FaVideo, FaList } from "react-icons/fa";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import Ad from "./Ad";

type LeftMenuProps = {
  type: "home" | "profile";
};

const LeftMenu: FC<LeftMenuProps> = ({ type }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <PiNotePencilBold className="text-blue-500 size-5" />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <GiMountainRoad className="text-blue-500 size-5" />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <GiShop className="text-blue-500 size-5" />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <GiCalendar className="text-blue-500 size-5" />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <BiPhotoAlbum className="text-blue-500 size-5" />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <FaVideo className="text-blue-500 size-5" />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <PiNewspaperFill className="text-blue-500 size-5" />
          <span>News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <LiaSchoolSolid className="text-blue-500 size-5" />
          <span>Courses</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <FaList className="text-blue-500 size-5" />
          <span>Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100 rounded-lg"
        >
          <IoSettings className="text-blue-500 size-5" />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;

import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { MdGroupWork, MdAutoStories } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { ImSpinner } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64 px-4">
      <div className="flex items-center justify-between h-24">
        {/* LEFT */}
        <div className="">
          <Link href="/">
            <div className="size-12 relative md:size-15">
              <Image src="/svg/mykey_logo.svg" fill alt="mykey-icon" />
            </div>
          </Link>
        </div>
        {/* CENTER */}
        <div className="hidden md:flex items-center justify-between w-1/2">
          <div className="flex gap-6 text-gray-600">
            <Link href="/" className="flex gap-2 items-center">
              <FaUserFriends className="size-4 text-blue-400" />
              <span>Friends</span>
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              <MdAutoStories className="size-4 text-blue-400" />
              <span>Stories</span>
            </Link>
            <Link href="/" className="flex gap-2 items-center">
              <MdGroupWork className="size-4 text-blue-400" />
              <span>Groups</span>
            </Link>
          </div>
          <div className="hidden lg:flex p-2 bg-slate-100 items-center rounded-xl">
            <input
              type="text"
              placeholder="search"
              className=" bg-transparent outline-none"
            />
            <CiSearch />
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex gap-2">
          <ClerkLoading>
            <ImSpinner className="text-blue-400 animate-spin size-4" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <div className="flex items-center gap-2">
                <div className="hidden md:flex gap-4">
                  <div className="cursor-pointer">
                    <Image
                      src="/people.png"
                      alt="people"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="cursor-pointer">
                    <Image
                      src="/messages.png"
                      alt="messges"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="cursor-pointer">
                    <Image
                      src="/notifications.png"
                      alt="notifications"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center gap-2 text-sm">
                <RxAvatar className=" size-5 text-gray-400" />
                <Link href="/sign-in">Login/Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

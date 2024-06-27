"use client";

import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TiThMenu } from "react-icons/ti";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <TiThMenu className="size-8 text-blue-500" />
      </SheetTrigger>
      <SheetContent>
        <div className="size-full flex flex-col items-center justify-center gap-8 font-medium text-xl">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

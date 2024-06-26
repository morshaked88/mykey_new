import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="w-full bg-white md:px-8 lg:px-16 xl:px-32 2xl:px-64 px-4">
      <div className="flex items-center justify-between h-24">
        {/* LEFT */}
        <div className="">
          <Link href="/">Mykey</Link>
        </div>
        {/* CENTER */}
        <div className="hidden"></div>
        {/* RIGHT */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;

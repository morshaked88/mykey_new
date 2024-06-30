import { CreatePost, Feed, LeftMenu, RightMenu, Stories } from "@/components";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu />
        </div>
        <div className="w-full lg:w-[70%] xl:w-1/2">
          <div className="flex flex-col gap-6">
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="1234" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

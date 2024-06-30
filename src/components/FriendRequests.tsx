import Link from "next/link";
import React from "react";
import FriendRequest from "./FriendRequest";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friends Requests</span>
        <Link href="/" className="text-blue-500">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 items-center justify-between">
        <FriendRequest
          userId={"1324"}
          avatar="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Bruce Wayne"
        />
        <FriendRequest
          userId={"1324"}
          avatar="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Bruce Wayne"
        />
        <FriendRequest
          userId={"1324"}
          avatar="https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Bruce Wayne"
        />
      </div>
    </div>
  );
};

export default FriendRequests;

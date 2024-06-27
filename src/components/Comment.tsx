import React from "react";
import Image from "next/image";
import { abbreviateNumber } from "@/lib/utils";

const Comment = () => {
  return (
    <div className="flex flex-col mt-4">
      {/* USER INFO */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.pexels.com/photos/26115852/pexels-photo-26115852/free-photo-of-a-woman-in-a-blue-dress-standing-in-front-of-a-train.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={40}
            height={40}
            alt="avatar"
            className="size-10 rounded-full object-cover"
          />
          <span className="font-medium">Mor Shaked</span>
        </div>
        {/* ICON */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className=" cursor-pointer size-4"
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-2 mt-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          debitis nostrum fugit, voluptates voluptatum possimus, a asperiores
          quia accusamus numquam quo facere odio laboriosam dolore! Animi quas
          quae aliquam. Dignissimos.
        </p>
        <div className="flex items-center gap-8 text-sm text-gray-500 mt-2">
          <div className="flex items-center gap-4">
            <Image
              src="/like.png"
              width={12}
              height={12}
              alt="Like"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {abbreviateNumber(1231)}{" "}
              <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="">Replay</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

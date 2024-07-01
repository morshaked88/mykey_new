import React from "react";
import Image from "next/image";
import { abbreviateNumber } from "@/lib/utils";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4 shadow-md bg-white rounded-lg p-3">
      {/* USER */}
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/23643826/pexels-photo-23643826/free-photo-of-a-woman-standing-on-a-pier-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={40}
            height={40}
            alt="avatar"
            className="size-10 rounded-full"
          />
          <span className=" font-medium">Mor Shaked</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt="avatar" />
      </div>
      {/* POST */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/13332942/pexels-photo-13332942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-md object-cover"
            fill
            alt="avatar"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          dolorum non, quo harum aspernatur commodi repellendus fugiat eum,
          iusto saepe enim ducimus libero id ad minima tempora perferendis et
          amet.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="like"
              className=" cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {abbreviateNumber(1231)}{" "}
              <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="comment"
              className=" cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              {abbreviateNumber(1231)}{" "}
              <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
          <Image
            src="/share.png"
            width={16}
            height={16}
            alt="share"
            className=" cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {abbreviateNumber(1231)}{" "}
            <span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;

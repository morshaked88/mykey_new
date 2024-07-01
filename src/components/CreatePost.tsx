import React from "react";
import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const CreatePost = () => {
  const { userId } = auth();

  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm shadow-md">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/23643826/pexels-photo-23643826/free-photo-of-a-woman-standing-on-a-pier-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={48}
        height={48}
        alt="avatar"
        className="size-12 rounded-full object-cover"
      />
      {/* POST */}
      <div className="flex-1">
        {/* INPUT */}
        <form className="flex gap-4" action="">
          <textarea
            placeholder="what's on your mind?"
            className="bg-slate-100 rounded-lg resize-none flex-1 p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            width={20}
            height={20}
            alt="avatar"
            className="size-5 cursor-pointer self-end"
          />
          <button type="submit">send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-3 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addImage.png" width={20} height={20} alt="avatar" />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" width={20} height={20} alt="avatar" />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" width={20} height={20} alt="avatar" />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" width={20} height={20} alt="avatar" />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

import React from "react";
import Image from "next/image";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div>
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26115852/pexels-photo-26115852/free-photo-of-a-woman-in-a-blue-dress-standing-in-front-of-a-train.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={40}
          height={40}
          alt="avatar"
          className="size-10 rounded-full object-cover"
        />
        <div className="flex items-center w-full bg-slate-100 rounded-xl text-sm px-6 py-2 flex-1">
          <input
            type="text"
            placeholder="write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            width={16}
            height={16}
            alt="emoji"
            className=" size-4"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        <Comment />
      </div>
    </div>
  );
};

export default Comments;

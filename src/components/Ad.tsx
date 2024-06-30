import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type AdProps = {
  size: "sm" | "md" | "lg";
};

const Ad: FC<AdProps> = ({ size }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm gap-4 flex flex-col">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Sponsored Ads</span>
        <Image src="/more.png" width={16} height={16} alt="more" />
      </div>
      {/* MIDDLE */}
      <div className="flex flex-col gap-3">
        <div
          className={cn("relative w-full", {
            "h-24": size === "sm",
            "h-36": size === "md",
            "h-48": size === "lg",
          })}
        >
          <Image
            src="https://images.pexels.com/photos/16258800/pexels-photo-16258800/free-photo-of-person-hugging-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            alt="ads"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/16258800/pexels-photo-16258800/free-photo-of-person-hugging-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={24}
            height={24}
            alt="ad"
            className="rounded-full object-cover size-6"
          />
          <span className="font-medium text-blue-500">Hug Trees Now!</span>
        </div>
        <p
          className={cn("", {
            "text-xs line-clamp-3": size === "sm",
            "text-sm line-clamp-4": size === "md",
            "text-base line-clamp-6": size === "lg",
          })}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni
          soluta eos ducimus. Est necessitatibus cumque, incidunt at corporis
          officia, modi pariatur eos nemo iure aperiam enim ullam hic? Eveniet!
        </p>
      </div>
      {/* BOTTOM */}
      <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
        Learn More
      </button>
    </div>
  );
};

export default Ad;

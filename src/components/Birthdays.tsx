import Link from "next/link";
import React from "react";
import { IoBalloon } from "react-icons/io5";
import Birthday from "./Birthday";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-3">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
        <IoBalloon className="size-5 text-red-600" />
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 items-center justify-between">
        <Birthday
          userId="1234"
          avatar="https://images.pexels.com/photos/12984738/pexels-photo-12984738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Shay-la"
        />
      </div>
    </div>
  );
};

export default Birthdays;

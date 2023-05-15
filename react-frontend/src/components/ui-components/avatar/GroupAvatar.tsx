import React from "react";

const GroupAvatar = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex -space-x-4">
          <img
            alt=""
            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
            src="https://source.unsplash.com/40x40/?portrait?1"
          />
          <img
            alt=""
            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
            src="https://source.unsplash.com/40x40/?portrait?2"
          />
          <img
            alt=""
            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
            src="https://source.unsplash.com/40x40/?portrait?3"
          />
          <img
            alt=""
            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
            src="https://source.unsplash.com/40x40/?portrait?4"
          />
          <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
            +3
          </span>
        </div>
      </div>
    </>
  );
};

export default GroupAvatar;

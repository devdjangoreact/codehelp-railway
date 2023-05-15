import React from "react";

const Button = () => {
  return (
    <>
      // sm
      <button className="px-4 py-2 text-sm text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-lg">
        Button
      </button>
      // default
      <button className="px-5 py-2.5 text-white bg-indigo-600 rounded-md duration-150 hover:bg-indigo-700 active:shadow-lg">
        Button
      </button>
      // md
      <button className="px-6 py-3 text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-lg">
        Button
      </button>
      // lg
      <button className="px-7 py-3.5 text-white bg-indigo-600 rounded-md duration-150 hover:bg-indigo-700 active:shadow-lg">
        Button
      </button>
      // xl
      <button className="px-8 py-4 text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-lg">
        Button
      </button>
    </>
  );
};

export default Button;

import React from "react";

const AlertColor = () => {
  return (
    <>
      <div
        className="bg-gray-800 text-sm text-white rounded-md p-4 dark:bg-white dark:text-gray-800"
        role="alert"
      >
        <span className="font-bold">Dark</span> alert! You should check in on
        some of those fields below.
      </div>
      <div
        className="bg-gray-500 text-sm text-white rounded-md p-4"
        role="alert"
      >
        <span className="font-bold">Secondary</span> alert! You should check in
        on some of those fields below.
      </div>
      <div
        className="bg-blue-500 text-sm text-white rounded-md p-4"
        role="alert"
      >
        <span className="font-bold">Info</span> alert! You should check in on
        some of those fields below.
      </div>
      <div
        className="bg-green-500 text-sm text-white rounded-md p-4"
        role="alert"
      >
        <span className="font-bold">Success</span> alert! You should check in on
        some of those fields below.
      </div>
      <div
        className="bg-red-500 text-sm text-white rounded-md p-4"
        role="alert"
      >
        <span className="font-bold">Danger</span> alert! You should check in on
        some of those fields below.
      </div>
      <div
        className="bg-orange-500 text-sm text-white rounded-md p-4"
        role="alert"
      >
        <span className="font-bold">Warning</span> alert! You should check in on
        some of those fields below.
      </div>
      <div
        className="bg-white text-sm text-gray-600 rounded-md p-4"
        role="alert"
      >
        <span className="font-bold">Light</span> alert! You should check in on
        some of those fields below.
      </div>
    </>
  );
};

export default AlertColor;

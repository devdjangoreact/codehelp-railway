import React from "react";

interface InputType {
  type?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
}

export const Input = (props: InputType) => {
  return (
    <input
      type={props.type}
      id={props.id}
      className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
       focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${props.className} `}
      placeholder={props.placeholder}
      required
      value={props.value}
      onChange={props.onChange}
    />
  );
};

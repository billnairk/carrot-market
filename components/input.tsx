import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price" | "file";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  type,
  register,
  required,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-gray-500 font-bold">
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md relative flex items-center">
          <input
            id={name}
            type={type}
            className="appearance-none shadow-md w-full rounded-md border-gray-400 focus:ring-purple-300 focus:border-purple-300"
            required={required}
            {...register}
          ></input>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex shadow-md ">
          <span className="flex items-center justify-center bg-gray-100 select-none border-gray-400 rounded-l-md border border-r-0 px-2 text-sm text-gray-500">
            +82
          </span>
          <input
            id={name}
            type="number"
            className="appearance-none w-full rounded-r-md focus:ring-purple-300 border-gray-400 focus:border-purple-300"
            required={required}
            {...register}
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex items-center">
          <div className="absolute left-0 pl-3 pointer-events-none">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            className="appearance-none pl-7 shadow-md w-full rounded-md border-gray-400 focus:ring-purple-300 focus:outline-none focus:border-purple-300"
            id={name}
            type={type}
            placeholder="0.00"
            required={required}
            {...register}
          ></input>
          <div className="absolute right-3 pointer-events-none">
            <span className="text-gray-500 ">USD</span>
          </div>
        </div>
      ) : null}
      {kind === "file" ? (
        <div className="rounded-md relative flex items-center">
          <input
            id={name}
            type={type}
            className="hidden"
            accept="image/*"
            required={required}
            {...register}
          ></input>
        </div>
      ) : null}
    </div>
  );
}

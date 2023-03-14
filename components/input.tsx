import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  className: string;
  id: string;
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
}

export default function Input({
  className,
  id,
  type,
  placeholder,
  register,
  ...rest
}: InputProps) {
  return (
    <input
      {...register}
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}

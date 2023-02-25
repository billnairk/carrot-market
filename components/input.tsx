interface InputProps {
  className: string;
  id: string;
  type: string;
  placeholder?: string;
  [key: string]: any;
}

export default function Input({
  className,
  id,
  type,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <input
      className={className}
      id={id}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}

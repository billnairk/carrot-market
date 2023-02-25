interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="flex w-full justify-center items-center border border-1 py-3 px-5 rounded-md text-purple-500 hover:bg-purple-200 hover:border-purple-500 hover:transition-all">
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  kind?: "one" | "two";
}

export default function Button({ children, kind }: ButtonProps) {
  return (
    <>
      {kind === "one" ? (
        <button className="bg-purple-600 w-full p-3 rounded-md shadow-md text-white hover:font-bold hover:text-md transition-all">
          {children}
        </button>
      ) : null}
      {kind === "two" ? (
        <button className="flex w-full justify-center items-center border border-1 py-3 px-5 rounded-md text-purple-500 hover:bg-purple-200 hover:border-purple-500 hover:transition-all">
          {children}
        </button>
      ) : null}
    </>
  );
}

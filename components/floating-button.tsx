import Link from "next/link";

interface FloatProps {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatProps) {
  return (
    <Link href={href}>
      <button className="fixed bottom-20 right-0 shadow-lg hover:bg-purple-700 transition-all bg-purple-500 p-4 rounded-full text-white ">
        {children}
      </button>
    </Link>
  );
}

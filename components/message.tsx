import { cls } from "@/libs/utils";
import Layout from "./layout";

interface MessageProps {
  message: string;
  reversed: boolean;
}

export default function Message({ message, reversed }: any) {
  return (
    <>
      <div
        className={cls(
          "flex  items-center space-x-2 space-y-6",
          reversed ? "flex-row-reverse space-x-reverse" : ""
        )}
      >
        <div className="w-8 h-8 mt-6 bg-purple-400 rounded-full" />
        <div className="w-auto py-2 px-3 border border-gray-400 rounded-md">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

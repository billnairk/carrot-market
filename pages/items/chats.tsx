import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="flex pt-3 pb-2 px-4 mb-3 space-x-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-purple-600 rounded-full" />
          <div>
            <p className="font-medium text-gray-600">Steve Jebs</p>
            <p className="text-sm font-medium opacity-40">
              모니터 구매할 수 있나요?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

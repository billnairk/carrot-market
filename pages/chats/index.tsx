import Layout from "@components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="Chats">
      <div className="py-1">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link key={i} href={`/chats/${i}`}>
            <div className="flex py-4 px-4 space-x-2 cursor-pointer w-full border-b hover:bg-purple-100 transition-colors">
              <div className="w-14 h-14 bg-purple-600 rounded-full" />
              <div>
                <p className="mt-1 font-lg font-bold text-gray-600">
                  Steve Jebs
                </p>
                <p className="text-medium font-medium text-gray-400">
                  모니터 구매할 수 있나요?
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;

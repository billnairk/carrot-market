import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import { NextPage } from "next";
import Link from "next/link";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="Stream">
      <div className="py-2 space-y-4">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/streams/${i}`}>
            <div className="px-4 py-4 border-b border-gray-200">
              <div className="w-full bg-purple-700 rounded-md hover:bg-purple-400 aspect-video" />
              <h3 className="pt-3 text-gray-600">ooo님이 방송중..</h3>
            </div>
          </Link>
        ))}
        <FloatingButton href="/streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;

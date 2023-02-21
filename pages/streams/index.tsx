import Layout from "@/components/layout";
import { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <Layout hasTabBar title="Stream">
      <div className="py-2 space-y-4 divide-y-2">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className="px-4 pt-4">
            <div className="w-full bg-purple-700 rounded-md hover:bg-purple-400 aspect-video" />
            <h3 className="pt-3 text-gray-600">ooo님이 방송중..</h3>
          </div>
        ))}
        <button className="fixed bottom-12 right-5 shadow-lg hover:bg-purple-700 transition-all bg-purple-500 p-4 rounded-full border-transparent hover:ring-2 hover:ring-offset-2 hover:ring-purple-500 text-white ">
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
        </button>
      </div>
    </Layout>
  );
};

export default Live;

import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Community: NextPage = () => {
  return (
    <Layout hasTabBar title="News">
      <div className="pt-1 space-y-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
          <Link key={i} href={`/community/${i}`}>
            <div className="flex flex-col cursor-pointer items-start hover:bg-purple-100 transition-colors">
              <span className="mt-3 mx-4 flex items-center bg-gray-200 text-sm font-bold px-2.5 py-0.5 rounded-full text-gray-900">
                동네질문
              </span>
              <div className="pl-4 pt-2 text-gray-800">
                <span className="text-purple-500 font-medium">Q. </span>붕어빵
                아저씨 나오셨나요?
              </div>
              <div className="px-4 pt-4 flex space-x-1 items-center w-full text-sm font-bold text-gray-500">
                <div className="w-5 h-5 bg-purple-200 rounded-full"></div>
                <div className="space-x-1 flex w-full justify-between items-center">
                  <span>Miiase</span>
                  <span>18시간 전</span>
                </div>
              </div>
              <div className="pl-4 mt-4 py-2 flex border-t border-b w-full space-x-4">
                <span className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>궁금해요 1</span>
                </span>
                <span className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>답변 1</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
        <FloatingButton href="/community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;

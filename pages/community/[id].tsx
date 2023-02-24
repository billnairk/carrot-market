import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div>
      <span className="inline-flex items-center my-2.5 bg-gray-200 text-sm ml-4 font-bold px-2.5 py-0.5 rounded-full text-gray-900">
        동네질문
      </span>
      <div className="flex py-3 px-4 mb-3 space-x-2 border-b border-gray-300 cursor-pointer">
        <div className="w-10 h-10 bg-purple-200 rounded-full" />
        <div>
          <p className="font-bold opacity-80">Miiase</p>
          <p className="text-sm opacity-40">View profile &rarr;</p>
        </div>
      </div>
      <div className="">
        <div className=" text-gray-800">
          <span className="text-purple-500 ml-4 font-medium">Q. </span>오늘
          붕어빵 아저씨 나오셨나요?
        </div>
        <div className="mt-4 py-2 flex border-t border-b w-full space-x-4">
          <span className="flex items-center ml-4 space-x-2">
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
      <div className="px-4 py-2">
        <div className="flex items-start space-x-2 py-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="">
            <span className="block font-medium text-gray-700">Steve Jebs</span>
            <span className="block text-xs font-medium text-gray-500">
              2시간 전
            </span>
            <p className="mt-2">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-2 py-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="">
            <span className="block font-medium text-gray-700">Steve Jebs</span>
            <span className="block text-xs font-medium text-gray-500">
              2시간 전
            </span>
            <p className="mt-2">네! 오후 9시까지 하신대요~ 빨리 가셔야 할 듯</p>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <textarea
          className="shadow-md my-1 w-full rounded-md border-gray-400 focus:ring-purple-300 focus:outline-none focus:border-purple-300"
          rows={4}
          placeholder="Answer this question!"
        />
        <button className="w-full border border-1 py-3 px-5 rounded-md text-purple-500 hover:bg-purple-200 hover:border-purple-500 hover:transition-all">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;

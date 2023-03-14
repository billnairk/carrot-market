import Layout from "@components/layout";
import Message from "@components/message";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack title="Chat">
      <div className="px-4 py-4">
        <Message message="에눌 가능한가요?" />
        <Message message="님 섡" reversed />
        <Message message="2만원" />
        <Message message="차단합니다." reversed />
        <div className="fixed bottom-2 w-full mx-auto max-w-md inset-x-0">
          <div className="flex relative items-center">
            <input
              className="w-full pr-12 rounded-full border-gray-400 focus:outline-none focus:border-purple-500 focus:ring-purple-500"
              type="text"
            />
            <div className=" absolute flex inset-y-0 right-0">
              <button className="flex p-3 m-1 hover:ring-2 hover:ring-offset-2  hover:bg-purple-400 hover:ring-purple-300 text-white bg-purple-300 rounded-full items-center">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;

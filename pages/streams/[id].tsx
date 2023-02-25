import Layout from "@/components/layout";
import Message from "@/components/message";
import { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-6">
        <div className="w-full bg-purple-700 rounded-md hover:bg-purple-400 aspect-video" />
        <h3 className="pt-3 text-2xl font-semibold text-gray-800">
          ooo님이 방송중..
        </h3>
        <h1 className="mt-10 mb-1 text-2xl font-bold">Chats</h1>
        <div className="pt-4 px-2 h-[60vh] border-t-2 overflow-y-scroll">
          <Message message="드디어 시작!" />
          <Message message="ggggg !" reversed />
          <Message message="lololol!" />
          <Message message="아 광고 ㅡㅡ!" reversed />
          <Message message="오뱅언?" />
          <Message message="자~ 드가자" reversed />
          <Message message="ooo님이 구독 하셨습니다." />
          <Message message="오" reversed />
          <Message message="ㅋㅋㅋㅋㅋㅋㅋㅋ" />
          <Message message="화질 좋네" reversed />
          <Message message="드디어 시작!" />
          <Message message="ggggg !" reversed />
          <Message message="lololol!" />
          <Message message="아 광고 ㅡㅡ!" reversed />
          <Message message="오뱅언?" />
          <Message message="자~ 드가자" reversed />
          <Message message="ooo님이 구독 하셨습니다." />
          <Message message="오" reversed />
          <Message message="ㅋㅋㅋㅋㅋㅋㅋㅋ" />
          <Message message="화질 좋네" reversed />
          <div className="fixed bottom-2 w-full mx-auto max-w-md inset-x-0">
            <div className="flex relative items-center">
              <input
                className="w-full pr-12 rounded-full border-gray-400 focus:outline-none focus:border-purple-500 focus:ring-purple-500"
                type="text"
              />
              <div className="absolute flex inset-y-0 right-0">
                <button className="flex p-3 m-1 hover:ring-2 hover:ring-offset-2  hover:bg-purple-400 hover:ring-purple-300 text-white bg-purple-300 rounded-full items-center">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;

import { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="w-full bg-purple-700 rounded-md hover:bg-purple-400 aspect-video" />
      <h3 className="pt-3 text-2xl font-semibold text-gray-800">
        ooo님이 방송중..
      </h3>
      <h1 className="mt-10 mb-1 text-2xl font-bold">Chats</h1>
      <div className="px-4 h-[50vh] border-t-2 overflow-y-scroll space-y-4">
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>Hi how much are you selling them for?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 bg-purple-400 rounded-full" />
          <div className="w-1/2 p-2 border border-gray-400 rounded-md">
            <p>I want ￦20,000</p>
          </div>
        </div>
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
  );
};

export default Stream;

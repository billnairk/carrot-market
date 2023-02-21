import Layout from "@/components/layout";
import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="p-6">
        <div className="mb-6">
          <div className="h-96 bg-purple-300" />
          <div className="flex py-3 space-x-2 border-b border-gray-300 cursor-pointer">
            <div className="w-12 h-12 bg-purple-600 rounded-full" />
            <div>
              <p className="font-bold opacity-80">Steve Jebs</p>
              <p className="text-sm opacity-40">View profile &rarr;</p>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-4xl font-bold">Galaxy S50</h1>
            <p className="text-3xl mt-3">$140</p>
            <p className="mt-2 text-gray-500">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between mt-5 space-x-2">
              <button className="flex-1 bg-purple-500 py-3 text-white font-bold rounded-md text-lg focus:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-purple-700 hover:bg-purple-700 hover:text-xl transition-all">
                Talk to seller
              </button>
              <button className="flex justify-center items-center text-gray-400 hover:bg-gray-300 p-3 hover:text-red-400 rounded-md">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">Similar items</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-48 w-full bg-purple-300" />
                <h3 className="mt-2 text-gray-500">Galaxy S60</h3>
                <span className="text-sm font-medium">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;

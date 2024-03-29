import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center first:bg-red-100 last:bg-teal-100"
            >
              <span className="text-gray-500 my-2">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li key={i} className="bg-cyan-200 pt-2 empty:hidden">
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-5 text- bg-blue-500 text-white p-4 rounded-xl text-center w-1/2 mx-auto">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 flex justify-between">
          <span className="font-semibold text-2xl text-white">Profile</span>
          <span>IMAGE</span>
        </div>
        <div className="bg-white p-6 rounded-3xl relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-slate-400">Oders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full relative" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-slate-400">Spent</span>
              <span className="font-semibold">$240</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-12 -mb-4">
            <span className="text-3xl font-bold group-hover:text-4xl  group-hover:text-violet-400 transition-all">
              Miiase
            </span>
            <span className="text-sm text-slate-400">Seoul, Korea</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">♥️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5 mt-5 rounded-md" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Swoon Lounge</span>
          <span className="text-gray-500">Chair</span>
          <div className="mb-5 mt-3 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-100 w-8 rounded-md aspect-square">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-100 w-8 rounded-md aspect-square">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <span>$450</span>
            <button className="bg-blue-500 py-2 px-8 rounded-lg hover:bg-rose-400">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;

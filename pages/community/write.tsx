import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="shadow-md my-1 w-full rounded-md border-gray-400 focus:ring-purple-300"
        rows={4}
        placeholder="Write Here!"
      />
      <button className="w-full border border-1 py-3 px-5 rounded-md text-purple-500 hover:bg-purple-200 hover:border-purple-500 hover:transition-all">
        Send
      </button>
    </form>
  );
};

export default Write;

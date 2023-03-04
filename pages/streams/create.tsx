import Input from "@components/input";
import Textarea from "@components/textarea";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="space-y-5- py-10 px-4">
      <div className="my-5">
        <label htmlFor="price" className="text-sm text-gray-500 font-bold">
          Price
        </label>
        <div className="rounded-md relative flex items-center">
          <div className="absolute left-0 pl-3 pointer-events-none">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <Input
            className="appearance-none pl-7 shadow-md my-1 w-full rounded-md focus:outline-none focus:border-purple-300 border-gray-400 focus:ring-purple-300"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-3 pointer-events-none">
            <span className="text-gray-500 ">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-500 font-bold">Description</label>
        <div>
          <Textarea rows={4} />
        </div>
      </div>
      <button className="w-full border border-1 py-3 px-5 rounded-md text-purple-500 hover:bg-purple-200  hover:border-purple-500 hover:transition-all">
        Go Live
      </button>
    </div>
  );
};

export default Create;

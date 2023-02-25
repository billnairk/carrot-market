import Button from "@/components/button";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <label className="w-full flex items-center justify-center h-52 border-2 rounded-md text-gray-500 border-gray-300 border-dashed hover:text-purple-500 hover:border-purple-500 cursor-pointer">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-5">
        <label htmlFor="price" className="text-sm text-gray-500 font-bold">
          Price
        </label>
        <div className="rounded-md relative flex items-center">
          <div className="absolute left-0 pl-3 pointer-events-none">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <Input
            className="appearance-none pl-7 shadow-md my-1 w-full rounded-md border-gray-400 focus:ring-purple-300 focus:outline-none focus:border-purple-300"
            id="price"
            type="text"
            placeholder="0.00"
          ></Input>
          <div className="absolute right-3 pointer-events-none">
            <span className="text-gray-500 ">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-500 font-bold">Description</label>
        <Textarea rows={4} />
      </div>
      <Button>Upload product</Button>
    </div>
  );
};

export default Upload;

import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Textarea from "@components/textarea";
import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="Upload Product">
      <div className="px-4 py-6 space-y-4">
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
        <Input
          label="Name"
          name="Name"
          kind="text"
          type="text"
          register
          required
        ></Input>
        <Input
          label="Price"
          name="Price"
          kind="price"
          type="text"
          register
          required
        ></Input>
        <Textarea rows={4} />
        <Button kind="two">Upload product</Button>
      </div>
    </Layout>
  );
};

export default Upload;

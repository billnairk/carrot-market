import Input from "@components/input";
import Layout from "@components/layout";
import { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit profile">
      <div className="py-6 px-4 space-y-4">
        <div className="flex space-x-4">
          <div className="w-12 h-12 bg-purple-400 rounded-full" />
          <label
            htmlFor="picture"
            className="flex items-center text-sm text-gray-500 font-medium my-2 px-3 rounded-md border border-gray-500 hover:border-purple-400 hover:text-purple-300"
          >
            Change
            <Input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-gray-500 font-bold">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            required
            className="appearance-none shadow-md my-2 w-full rounded-md border-gray-400 focus:ring-purple-300 focus:border-purple-300"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-gray-500 font-bold">
            Email address
          </label>
          <div className="flex shadow-md my-2">
            <span className="flex items-center justify-center bg-gray-100 select-none border-gray-400 rounded-l-md border border-r-0 px-2 text-sm text-gray-500">
              +82
            </span>
            <input
              id="input"
              type="number"
              required
              className="appearance-none w-full rounded-r-md focus:ring-purple-300 border-gray-400 focus:border-purple-300"
            />
          </div>
        </div>
        <button className="bg-purple-600 w-full p-4 rounded-md shadow-md text-white hover:font-bold hover:text-md transition-all">
          Update profile
        </button>
      </div>
    </Layout>
  );
};

export default EditProfile;

import Button from "@components/button";
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
            <Input name="picture" type="file" kind="file" />
          </label>
        </div>
        <div className="space-y-1">
          <Input
            label="Email address"
            name="email"
            type="email"
            register
            required
          />
        </div>
        <div className="space-y-1">
          <Input
            label="Phone number"
            name="phone"
            type="number"
            kind="phone"
            register
            required
          />
        </div>
        <Button kind="one">Update profile</Button>
      </div>
    </Layout>
  );
};

export default EditProfile;

import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Textarea from "@components/textarea";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout title="Create Stream">
      <div className="space-y-4 p-4">
        <Input label="Title" name="title" type="text" required />
        <Textarea rows={4} />
        <Button kind="two">Go Live</Button>
      </div>
    </Layout>
  );
};

export default Create;

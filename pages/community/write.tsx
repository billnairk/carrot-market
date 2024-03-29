import Button from "@components/button";
import Layout from "@components/layout";
import Textarea from "@components/textarea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Community Write">
      <form className="px-4 py-4 space-y-2">
        <Textarea rows={4} placeholder="Write Here!" />
        <Button kind="two">Send</Button>
      </form>
    </Layout>
  );
};

export default Write;

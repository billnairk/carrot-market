import Button from "@/components/button";
import Textarea from "@/components/textarea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <Textarea rows={4} placeholder="Write Here!" />
      <Button>Send</Button>
    </form>
  );
};

export default Write;

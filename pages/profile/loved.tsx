import Item from "@/components/item";
import Layout from "@/components/layout";
import { NextPage } from "next";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack title="관심목록">
      <div>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="New iPhone 14"
            color="Black"
            price="$95"
            hearts={1}
            comments={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;

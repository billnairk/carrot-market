import Item from "@/components/item";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="HOME" hasTabBar>
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
        <button className="fixed bottom-24 right-5 shadow-lg hover:bg-purple-700 transition-all bg-purple-500 p-4 rounded-full text-white ">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Home;

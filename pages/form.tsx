import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2  p-5 ">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 peer border-gray-400 rounded-md "
      />
      <span className="text-red-700 peer-valid:hidden">
        빈 칸에 이름을 입력하세요.
      </span>
      <span className="text-teal-700 peer-invalid:hidden">
        멋진 이름이네요!
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;

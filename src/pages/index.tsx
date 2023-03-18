import { type NextPage } from "next";
import Head from "next/head";


import { api } from "~/utils/api";
import Header from "~/components/common/Header";
import Footer from "~/components/common/Footer";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <section className="text-gray-600 body-font h-screen">
      <div className="container px-5 py-24 mx-auto items-center">
        <div className="xl:w-1/2 lg:w-3/4 w-full  mx-auto text-center ">

          <p className="leading-relaxed text-lg">Welcome to Reviewer.ai</p>

        </div>
      </div>
    </section>
  );
};

export default Home;



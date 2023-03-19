import { type NextPage } from "next";
import Head from "next/head";
import QuestionBuilder from "../components/questionbuilder";



const Home: NextPage = () => {


  return (
    <section className="text-gray-600 body-font h-screen">
      <div className="container px-5 py-24 mx-auto items-center">
        <div className="xl:w-1/2 lg:w-3/4 w-full  mx-auto text-center ">

          <p className="leading-relaxed text-lg">Welcome to Reviewer.ai</p>
          <QuestionBuilder />

        </div>
      </div>
    </section>
  );
};

export default Home;



import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Typed from "react-typed";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Synapsis.Blog | Home</title>
      </Head>
      <Header />
      <section className="w-full py-5 px-3 md:px-20 h-screen">
        <div className="flex flex-col items-center text-center justify-center">
          <div className=" flex flex-col gap-2 mt-[30%] sm:mt-[20%] md:mt-[10%]">
            <h3 className="text-2xl md:text-4xl font-medium">Welcome to</h3>
            <Typed
              strings={["Synapsis.Blog"]}
              typeSpeed={250}
              backSpeed={20}
              loop
              className="text-4xl md:text-6xl font-bold text-sky-800"
            ></Typed>
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <Link
              className="flex items-center duration-300 hover:text-sky-600"
              href={"/Blog"}
            >
              <p className="text-sm md:text-md">See Blog</p>
              <div>
                <ArrowRightAltIcon />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

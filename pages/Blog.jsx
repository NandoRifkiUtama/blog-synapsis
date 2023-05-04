import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Blog = () => {
  const [data, setData] = useState([]);
  const url1 = "https://gorest.co.in/public/v2/posts";

  useEffect(() => {
    axios.get(`${url1}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const sliceString = (string, num) => {
    if (string?.length > num) {
      return string.slice(0, num) + "...";
    } else {
      return string;
    }
  };

  return (
    <>
      <Head>
        <title>Synapsis.Blog | Blog</title>
      </Head>
      <Header />
      <section className="w-full mb-20  py-5 px-3 md:px-20 h-full">
        <div>
          <h1 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
            Recent Blog Post
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="border border-gray-500/50 rounded-xl p-2 cursor-pointer duration-300 hover:shadow-lg relative h-[200px] lg:h-[250px]"
            >
              <div className="border-b borer-gray-500/50 mb-4 text-sm md:text-lg">
                <p className="text-md md:text-lg font-semibold text-gray-700 ">
                  {item.title}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {sliceString(item.body, 100)}
                </p>
              </div>
              <Link
                href={"/"}
                className=" items-center text-sky-600 hover:text-sky-300 duration-300 mt-4 absolute bottom-2"
              >
                <p className="text-xs">Read more</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

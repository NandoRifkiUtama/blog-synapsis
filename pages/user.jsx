import React, { useEffect, useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const User = () => {
  const [user, setUser] = useState([]);
  const url2 = "https://gorest.co.in/public/v2/users";
  useEffect(() => {
    axios.get(`${url2}`).then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Synapsis.Blog | User</title>
      </Head>
      <Header />
      <section className="w-max-[500px] py-5 px-3 md:px-20 h-full flex flex-col items-center mb-20">
        <div>
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            User List
          </h1>
        </div>
        <div className="mt-4 w-[350px] sm:w-[400px] md:w-[500px] lg:w-[750px] grid grid-cols-1 gap-4">
          {user.map((item) => (
            <div
              key={item.id}
              className="flex justify-between px-3 py-1 bg-sky-400 rounded-full items-center w-full"
            >
              <div className="bg-white rounded-full p-1 sm:p-2">
                <p className="text-xs">img</p>
              </div>
              <div
                className="text-white text-xs flex flex-col justify-between w-full ml-2
                    "
              >
                <p className="px-1 sm:px-2">{item.name}</p>
                <p className="px-1 sm:px-2">{item.email}</p>
              </div>
              <div className="flex justify-between gap-2 sm:gap-4">
                <div className="bg-yellow-400 text-white p-1 rounded-full cursor-pointer hover:bg-yellow-300">
                  <EditNoteIcon />
                </div>
                <div className="bg-red-600 text-white p-1 rounded-full cursor-pointer hover:bg-red-500">
                  <DeleteIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default User;

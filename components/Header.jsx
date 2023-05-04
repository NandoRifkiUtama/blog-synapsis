import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <section className="w-full py-5 px-3 md:px-20 h-full relative">
        <div className="flex justify-between items-center py-2 px-3 bg-sky-600 text-white rounded-xl">
          <div className="text-lg md:text-xl font-bold z-10">
            <Link href={"/"}>
              <p>Synapsis.Blog</p>
            </Link>
          </div>
          <div className="sm:flex gap-10 hidden">
            <Link
              className="text-xs md:text-sm hover:scale-105 hover:text-white/70 duration-100"
              href={"/"}
            >
              <p>Home</p>
            </Link>
            <Link
              className="text-xs md:text-sm hover:scale-105 hover:text-white/70 duration-100"
              href={"/Blog"}
            >
              <p>Blog</p>
            </Link>
            <Link
              className="text-xs md:text-sm hover:scale-105 hover:text-white/70 duration-100"
              href={"/User"}
            >
              <p>User</p>
            </Link>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="sm:hidden cursor-pointer hover:text-white/70 z-10"
          >
            <MenuIcon />
          </div>
          <div className={nav ? "bg-sky-600 absolute w-full top-[70px] right-0 px-3 py-4 z-20 duration-500" : "bg-sky-600 absolute w-full top-[70px] right-[-100%] px-3 py-4 z-20 duration-500"}>
            <div className="flex flex-col items-end gap-4">
              <Link
                className="text-sm hover:scale-105 hover:text-white/70 duration-100"
                href={"/"}
              >
                <p>Home</p>
              </Link>
              <Link
                className="text-sm hover:scale-105 hover:text-white/70 duration-100"
                href={"/Blog"}
              >
                <p>Blog</p>
              </Link>
              <Link
                className="text-sm hover:scale-105 hover:text-white/70 duration-100"
                href={"/User"}
              >
                <p>User</p>
              </Link>
            </div>
          </div>
          <div className={nav ? "fixed w-full h-screen bg-black/70 top-0 right-0 z[-1]" : "hidden"}>
      </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import { useRouter } from "next/router";
import React, { useEffect } from "react";

const error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div className="flex items-center justify-center mt-[40%] lg:mt-[10%] ">
      <h1 className="text-2xl font-bold text-red-600 p-4">
        404 | Sorry, we can not find your page....
      </h1>
    </div>
  );
};

export default error;

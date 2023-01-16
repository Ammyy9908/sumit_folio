import Link from "next/link";
import React from "react";

function index() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center ">
        <span className="text-6xl">🥳</span>
        <h1 className="text-6xl">Thanks for contact.</h1>
        <div className="w-[110px]  flex items-center justify-center px-2 py-1 bg-yellow-300 dark:bg-purple-600  mt-2">
          <Link href="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
}

export default index;

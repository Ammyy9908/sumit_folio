import React from "react";
import { FiDownload } from "react-icons/fi";

function Navbar() {
  return (
    <div className="bg-white/30 shadow-md py-4 rounded-full sticky top-10 z-20  backdrop-blur-2xl px-8 flex items-center justify-between w-[90%] mx-auto">
      <a href="#" className="font-bold text-xl">
        Sumit
      </a>
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <a href="#" className="font-semibold">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              Project
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <a
          href="#"
          className="shadow-md flex items-center justify-center bg-black text-white w-[112px] h-[42px]"
        >
          Resume
          <span>
            <FiDownload />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

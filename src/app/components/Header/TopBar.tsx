"use client";

import CenterTop from "./CenterTop";
import SvgLoader from "../SvgLoader";
import Link from "next/link";

function TopBar() {
  return (
    <header className="flex justify-between items-center p-6 md:px-12 w-full mx-auto">
      {/* Logo */}
      <Link href="/">
        <div className="flex-shrink-0">
          <SvgLoader
            width={150}
            height={200}
            fileName="Logo.svg"
            className=""
          />
        </div>
      </Link>

      {/* Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex">
        <CenterTop />
      </div>

      {/* Buttons (On Same Line for All Screen Sizes) */}
      <div className="flex items-center gap-2 md:gap-3">
        <button className="px-6 py-3 border-2 border-[#262840] text-[14px] text-[#7780A1] rounded-xl bg-transparent w-full  md:w-auto">
          Contact
        </button>

        <button className="px-6 py-3  text-[14px] rounded-xl  bg-gradient-to-b from-[#4745D0] to-[#2427C9] whitespace-nowrap min-w-[100px]w-full md:w-auto">
          My account
        </button>
      </div>
    </header>
  );
}

export default TopBar;

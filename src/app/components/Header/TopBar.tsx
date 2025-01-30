import CenterTop from "./CenterTop";
import SvgLoader from "../SvgLoader";

function TopBar() {
  return (
    <header className="flex justify-between items-center p-3 md:p-5 max-w-screen-xl mx-auto">
      {/* Logo */}
      <div className="flex-shrink-0">
        <SvgLoader fileName="Logo.svg" className="w-24 h-auto" />
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex">
        <CenterTop />
      </div>

      {/* Buttons (On Same Line for All Screen Sizes) */}
      <div className="flex items-center gap-2 md:gap-3">
        <button className="px-2 py-1 md:px-4 md:py-2 border-2 border-[#262840] text-[12px] text-[#7780A1] rounded-xl bg-transparent w-full md:w-auto">
          Contact
        </button>

        <button className="px-3 py-1 md:px-4 md:py-2 border-2 border-[#262840] text-[12px] md:text-[14px] rounded-xl bg-[#4745D0] whitespace-nowrap min-w-[100px] w-full md:w-auto">
          My account
        </button>
      </div>
    </header>
  );
}

export default TopBar;

import SvgLoader from "../SvgLoader";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-10">
      <div className="flex flex-col md:flex-row w-full md:w-[65%] h-auto md:h-[380px] justify-evenly px-6 py-10 mt-10 border border-[#262840] rounded-2xl space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="relative flex flex-col p-6 md:w-1/3">
          <SvgLoader width={150} height={200} fileName="Logo.svg" />

          <div className="flex absolute bottom-0 flex-wrap md:flex-row mt-4 space-x-4 md:space-x-6">
            <a className="text-[12px]">Support</a>
            <a className="text-[12px]">Terms of Service</a>
            <a className="text-[12px]">License</a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex relative flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-[#262840] p-6 md:w-1/3 space-y-3">
          <a className="text-[#ffffff]">Auctions</a>
          <a className="text-[#ffffff]">Roadmap</a>
          <a className="text-[#ffffff]">Discover</a>
          <a className="text-[#ffffff]">Community</a>

          <button className="px-6 py-3  text-[16px] rounded-xl  mt-4  w-[150px]   bg-gradient-to-b from-[#4745D0] to-[#2427C9]">
            My account
          </button>

          <div className="flex mt-8  absolute bottom-0  space-x-4 ">
            <SvgLoader
              width={15}
              height={15}
              className="cursor-pointer"
              fileName="fb.svg"
            />
            <SvgLoader
              width={15}
              height={15}
              className="cursor-pointer"
              fileName="Ln.svg"
            />
            <SvgLoader
              width={15}
              height={15}
              className="cursor-pointer"
              fileName="Gh.svg"
            />
            <SvgLoader
              width={15}
              height={15}
              className="cursor-pointer"
              fileName="Tw.svg"
            />
            <SvgLoader
              width={15}
              height={15}
              className="cursor-pointer"
              fileName="ig.svg"
            />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col relative  items-center md:items-start md:text-left p-6 md:w-1/3 min-w-0">
          <p className="text-sm text-white">
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
            velit, sed egestas in. Id nam semper dolor tellus vulputate eget
            turpis.
          </p>
          <div className="flex mt-6 absolute bottom-0 left-1/2 -translate-x-1/2 items-center bg-white rounded-xl shadow-lg p-2 w-full max-w-sm min-w-0">
 {/* Search Input */}
            <input
              type="text"
              placeholder="Newsletter"
              className="flex-grow min-w-0 text-gray-400 text-xs sm:text-sm px-2 sm:px-3 py-1 outline-none bg-transparent truncate"
            />

            {/* Divider + Button */}
            <button className="flex-shrink-0 text-[#2A27C9] text-xs sm:text-sm px-3 py-1 border-l hover:bg-white border-gray-300">
              Sign in
            </button>
          </div> 
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import SvgLoader from "../SvgLoader";


function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-10">
      <div className="flex flex-col md:flex-row w-full md:w-[65%] h-auto md:h-[380px] justify-evenly px-6 py-10 mt-10 border border-[#262840] rounded-2xl space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="relative flex flex-col p-6 md:w-1/3">
          <SvgLoader fileName="Logo.svg" />

          <div className="flex flex-wrap md:flex-row mt-4 space-x-4 md:space-x-6">
            <a className="text-[12px]">Support</a>
            <a className="text-[12px]">Terms of Service</a>
            <a className="text-[12px]">License</a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start border-t md:border-t-0 md:border-l border-[#262840] p-6 md:w-1/3 space-y-3">
          <a className="text-[#ffffff]">Auctions</a>
          <a className="text-[#ffffff]">Roadmap</a>
          <a className="text-[#ffffff]">Discover</a>
          <a className="text-[#ffffff]">Community</a>

          <button className="px-4 py-2 border-2 border-[#262840] mt-4 text-[14px] w-[150px] rounded-xl bg-[#4745D0]">
            My account
          </button>

          <div className="flex mt-8 space-x-4 ">
            <SvgLoader className="cursor-pointer" fileName="fb.svg" />
            <SvgLoader className="cursor-pointer" fileName="Ln.svg" />
            <SvgLoader className="cursor-pointer" fileName="Gh.svg" />
            <SvgLoader className="cursor-pointer" fileName="Tw.svg" />
            <SvgLoader className="cursor-pointer" fileName="ig.svg" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start md:text-left p-6 md:w-1/3 min-w-0">
  <p className="text-sm text-white">
    Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
  </p>

  <div className="flex mt-6 items-center bg-white rounded-xl shadow-lg p-2 w-full max-w-sm min-w-0">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Newsletter"
      className="flex-grow text-gray-400 text-xs sm:text-sm px-2 sm:px-3 py-1 outline-none bg-transparent truncate"
    />

    {/* Divider */}
    <div className="w-px bg-gray-300 h-4 sm:h-6 mx-2 sm:mx-3" />

    <h1 className="text-[#2A27C9] text-xs sm:text-sm text-center">
      Sign in
    </h1>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;

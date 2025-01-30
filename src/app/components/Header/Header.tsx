import SvgLoader from "../SvgLoader";
import BottomLogos from "./BottomLogos";
import FloatingSVGs from "./FloatingItems";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

function Header() {
  return (
    <div className="h-screen bg-[url('/Background.svg')] bg-no-repeat bg-center bg-cover">
      <TopBar />
      <FloatingSVGs />

      <div className="flex flex-col items-center pt-4 px-4 max-w-screen-xl mx-auto">
        <p className="text-sm md:text-base text-[#7780A1] text-center">Non Fungible Tokens</p>

        <div className="h-auto text-center">
  <div className="flex flex-col md:flex-row items-center justify-center">
    <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[120px] font-bold">
      A new NFT
    </h1>
    <SvgLoader fileName="Vector1.svg" className="hidden md:block ml-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
  </div>
  <div className="flex flex-col md:flex-row items-center justify-center">
    <SvgLoader fileName="Frame1.svg" className="hidden md:block mr-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
    <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[120px] font-bold">
      Experience
    </h1>
  </div>
</div>


        <div className="flex flex-col items-center mt-6 md:mt-10">
          <p className="text-sm md:text-base text-[#7780A1] mb-6">Discover, collect and sell</p>
          <SearchBar />

          <BottomLogos />
        </div>
      </div>
    </div>
  );
}

export default Header;

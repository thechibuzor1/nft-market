import SvgLoader from "../SvgLoader";
import BottomLogos from "./BottomLogos";
import FloatingSVGs from "./FloatingItems";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

/**
 * Header Component
 * 
 * Displays the top section of the page, including:
 * - Navigation bar (TopBar)
 * - Floating decorative SVGs
 * - Main title and tagline
 * - Search bar and brand logos
 * 
 */

function Header() {
  return (
    <header className="h-screen bg-[url('/Background.svg')] bg-no-repeat bg-center bg-cover">
      {/* Top Navigation Bar */}
      <TopBar />

      {/* Floating Decorative SVGs */}
      <FloatingSVGs />

      {/* Main Content */}
      <main className="flex flex-col items-center pt-4 px-4 max-w-screen-xl mx-auto">
        {/* Tagline */}
        <p className="text-sm md:text-base text-[#7780A1] text-center">
          Non Fungible Tokens
        </p>

        {/* Title Section */}
        <div className="h-auto text-center">
          {/* First Line of Title */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[120px] font-bold">
              A new NFT
            </h1>
            <SvgLoader
              width={50} height={50}
              fileName="Vector1.svg"
              className="hidden md:block ml-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
            <div className="w-20" />
          </div>

          {/* Second Line of Title */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-20" />
            <SvgLoader
            width={50} height={50}
              fileName="Frame1.svg"
              className="hidden md:block mr-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
            <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[120px] font-bold">
              Experience
            </h1>
          </div>
        </div>

        {/* Description, Search, and Logos */}
        <div className="flex flex-col items-center mt-12 md:mt-16">
          <p className="text-sm md:text-base text-[#7780A1] mb-6">
            Discover, collect and sell
          </p>
          <SearchBar />
          <BottomLogos />
        </div>
      </main>
    </header>
  );
}

export default Header;

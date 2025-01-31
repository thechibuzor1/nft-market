"use client";

import { more_from } from "../../../constants";
import PopularBlocks from "../components/Popular/Blocks";

function MoreFrom() {
  return (
    <div className="flex flex-col py-9 items-center border-t border-[#262840]">
      {/* Section Title */}
      <p className="text-center text-sm text-gray-400">Overline</p>
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-white">
        More from this author
      </h2>

      {/* Auction Blocks */}
      <div className="flex flex-wrap mt-6 justify-center gap-4">
        {more_from.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px]"
          >
            <PopularBlocks item={item} />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button
        className="text-sm mt-10 border border-[#7780A1] py-2 px-4 text-[#7780A1] rounded-md hover:bg-[#7780A1] hover:text-white transition duration-300"
        title="Show More"
      >
        Show me more
      </button>
    </div>
  );
}

export default MoreFrom;

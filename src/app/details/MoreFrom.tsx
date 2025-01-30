'use client';

 

import { auctions } from "../../../constants";
import PopularBlocks from "../components/Popular/Blocks";
 
 

function MoreFrom() {
  
  return (
    <div className="flex flex-col py-9 items-center border-t border-[#262840] border-solid">
      <p className="text-center">Overline</p>
      <h2 className="text-[32px] md:text-[36px] text-center">More form this author</h2>
 

      <div className="flex flex-wrap mt-6 justify-center ">
  {auctions.slice(0, 5).map((item, index) => (
    <div key={index} className="snap-center flex-shrink-0 w-[180px] sm:w-[220px] md:w-[250px] lg:w-[280px]">
      <PopularBlocks item={item} />
    </div>
  ))}
</div>

      <button className="text-[12px] self-center mt-10 border border-[#7780A1] py-2 px-4 text-[#7780A1] rounded-md" title="more">
        Show me more
      </button>
    </div>
  );
}

export default MoreFrom;

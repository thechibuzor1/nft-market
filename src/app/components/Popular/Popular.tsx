'use client';

import { useState } from "react";
import { auctions } from "../../../../constants";
import PopularBlocks from "./Blocks";

const categories = ["Architecture", "Photography", "Games", "Music"];

const CategoryBlocks = ({
  item,
  active,
  setActive
}: {
  item: string;
  active: boolean;
  setActive: any;
}) => {
  return (
    <div 
      onClick={() => setActive(item)}
      className={`border border-[${
        active ? "#7780A1" : "#262840"
      }] border-[2px] p-2 rounded-lg`}
    >
      <h3 className="font-semibold text-[#7780A1]">{item}</h3>
    </div>
  );
};

function Popular() {
  const [activeCategory, setActiveCategory] = useState<string>("Photography");

  return (
    <div className="flex flex-col py-9 items-center border-t border-[#262840] border-solid">
      <p className="text-center">Overline</p>
      <h2 className="text-[32px] md:text-[36px] text-center">Most popular live auctions</h2>

      <div className="flex flex-wrap space-x-3 justify-center my-8 gap-3">
        {categories.map((category) => (
          <CategoryBlocks
            key={category}
            item={category}
            active={activeCategory === category}
            setActive={setActiveCategory}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center ">
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

export default Popular;

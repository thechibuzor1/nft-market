"use client";

import React, { useRef } from "react";
import AuctionBlocks from "./AuctionBlocks";
import SvgLoader from "../SvgLoader";
import { auctions } from "../../../../constants";

/**
 * Auctions Component
 * 
 * Displays a horizontally scrollable list of live auctions.
 *
 */

const Auctions: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      if (scrollLeft < maxScrollLeft) {
        carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-9">
      <h2 className="text-[28px] md:text-[36px] text-center">Latest live auctions</h2>

      {/* Wrapper to prevent overflow and hide scrollbar */}
      <div className="w-full overflow-x-hidden">
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-hidden scrollbar-hide space-x-4 mt-10 snap-x snap-mandatory pl-4 pr-4 flex-nowrap"
        >
          {auctions.map((item, index) => (
            <div key={index} className="snap-center flex-shrink-0">
              <AuctionBlocks item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Scroll Buttons */}
      <button
        title="scroll"
        onClick={scrollRight}
        className="absolute right-[10%] top-[40%] bg-[#262840CC] rounded-full w-[120px] h-[120px] flex items-center justify-center shadow-lg hover:bg-[#110f31] transition"
      >
        <SvgLoader fileName="tiny next.svg" />
      </button>

      <button
        title="scroll"
        onClick={scrollLeft}
        className="absolute left-[10%] top-[40%] bg-[#262840CC] rounded-full w-[120px] h-[120px] flex items-center justify-center shadow-lg hover:bg-[#110f31] transition"
      >
        <SvgLoader className="rotate-180" fileName="tiny next.svg" />
      </button>
    </div>
  );
};

export default Auctions;

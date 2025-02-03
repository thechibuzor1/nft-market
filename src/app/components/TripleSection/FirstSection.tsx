"use client";

import Image from "next/image";
import SvgLoader from "../SvgLoader";
import { useState } from "react";
import { Auction, auctions } from "../../../../constants";
import Link from "next/link";


/**
 * SlideItem Component
 * - Represents a single auction item in the slider.
 * - Clickable to navigate to the item details page.
 * - Includes a like button with a heart icon toggle.
 */
function SlideItem({ item, isActive }: { item: Auction; isActive: boolean }) {
  const [liked, setLiked] = useState<boolean>(false);


  return (
    <div
      className={`cursor-pointer flex w-[200px] flex-shrink-0 flex-col transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-25"
      }`}
    >
      {/* Auction Item Image */}
      <Link href="/details">
      <Image
        width={200}
        height={300}
        className="w-[200px] h-[300px] object-cover rounded-2xl"
        src={item.cover}
        alt={item.title}
      />
      </Link>

      {/* Auction Item Title */}
      <Link href="/details">
      <h2 className="font-semibold text-white leading-none my-4 line-clamp-2 overflow-hidden text-ellipsis">
        {item.title}
      </h2></Link>

      {/* Auction Timer and Price Section */}
      <div className="flex flex-row items-center justify-between">
        {/* Time Remaining */}
        <div className="flex flex-row items-center space-x-2">
          <SvgLoader width={15} height={15}  fileName="tiny clock.svg" />
          <p className="text-[12px] text-white">{item.time}</p>
        </div>

        {/* Auction Price */}
        <div className="flex flex-col items-end h-min bg-[#514CFF26] rounded-lg px-4 py-2 shrink-0">
          <p className="font-semibold text-[#514CFF] text-[12px]">{item.value} ETH</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-[95%] self-center h-[1px] bg-[#262840] my-4" />

      {/* Bid Count and Like Button */}
      <div className="flex justify-between">
        <p className="text-[12px] text-[#7780A1]">{item.bids} people are bidding</p>

        {/* Toggle Like Button */}
        <div onClick={() => setLiked(!liked)}>
          <SvgLoader width={20} height={20} fileName={liked ? "tiny heart filled.svg" : "tiny heart.svg"} />
        </div>
      </div>
    </div>
  );
}

/**
 * FirstSection Component
 * - Displays a horizontally scrollable list of auction items.
 * - Includes navigation buttons to slide through items.
 */
function FirstSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 < auctions.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="flex flex-col relative border border-[#262840] w-full sm:w-[320px] h-[700px] p-8 rounded-2xl">
      {/* Section Title */}
      <h1 className="font-semibold text-[26px] mb-10 text-left">
        Check out the hottest Sale offers
      </h1>

      {/* Scrollable Auction Items Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 210}px)`,
          }}
        >
          {auctions.map((item, index) => (
            <div key={index} className="mr-4 flex-shrink-0">
              <SlideItem item={item} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>

      {/* Next Slide Button */}
      <button
        onClick={nextSlide}
        title="Next"
        className="absolute right-[10%] top-[40%] bg-[#262840CC] rounded-full w-[60px] h-[60px] flex items-center justify-center shadow-lg hover:bg-[#110f31] transition"
      >
        <SvgLoader width={10} height={10}  fileName="tiny next.svg" />
      </button>

      {/* "Show More" Button */}
      <button
        className="text-[12px] absolute bottom-2.5 w-[90%] self-center my-4 border border-[#262840] py-2 text-[#7780A1] rounded-md"
        title="more"
      >
        Show me more
      </button>
    </div>
  );
}

export default FirstSection;

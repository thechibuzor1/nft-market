"use client";

import Image from "next/image";
import { ScrollingNFT, scrollingNfts } from "../../../../constants";

/**
 * ScrollingNft Component
 * 
 * Represents a single NFT item with an image and label.
 * 
 * Props:
 * - svg: { fileName: string; name: string } - NFT image source and name.
 */
const ScrollingNft = ({ svg }: { svg: ScrollingNFT }) => (
  <div className="flex flex-col">
    <Image
      alt="floating"
      width={64}
      height={64}
      src={svg.fileName}
      className="w-16 h-16 rounded-2xl shadow-[0px_6px_12px_rgba(255,255,255,0.2)]"
    />
    <p className="text-[10px] mt-1 text-center">{svg.name}</p>
  </div>
);

/**
 * Creates a seamless infinite scroll effect by duplicating the NFT array.
 * Using Array(5).fill(scrollingNfts).flat() ensures smooth scrolling.
 */
const duplicatedSvgs = Array(2).fill(scrollingNfts).flat();

/**
 * ScrollingSvgs Component
 * 
 * Displays a horizontally scrolling list of NFT images.
 */
function ScrollingSvgs() {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex space-x-4 animate-scroll w-max">
        {duplicatedSvgs.map((svg, index) => (
          <ScrollingNft key={index} svg={svg} />
        ))}
      </div>
    </div>
  );
}

export default ScrollingSvgs;

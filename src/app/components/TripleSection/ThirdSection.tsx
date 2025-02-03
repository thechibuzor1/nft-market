"use client";

import Image from "next/image";
import SvgLoader from "../SvgLoader";
import { useState } from "react";
import { NFT, nfts } from "../../../../constants";
import Link from "next/link";
// Sample NFT data (static list for now)

/**
 * Blocks Component
 * - Represents a single NFT item in a compact horizontal layout.
 * - Displays NFT image, title, time remaining, current bid, and like button.
 */
function Blocks({ item }: { item: NFT }) {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="flex flex-row cursor-pointer">
      {/* NFT Cover Image */}

      <Image
        alt="NFT Image"
        height={100}
        width={100}
        src={item.cover}
        className="w-[100px] h-[100px] rounded-2xl"
      />

      {/* NFT Details */}
      <div className="flex flex-col ml-3">
        {/* Title */}
        <Link href="/details">
          <h3 className="font-semibold cursor-pointer text-white leading-none line-clamp-2 overflow-hidden text-ellipsis mb-2 text-[14px]">
            {item.title}
          </h3>
        </Link>
        {/* Time & Price */}
        <div className="flex flex-row items-center mb-2 justify-between">
          {/* Remaining Time */}
          <div className="flex flex-row items-center space-x-2">
          <SvgLoader width={15} height={15}  fileName="tiny clock.svg" />
          <p className="text-[11px] text-white">{item.time}</p>
        </div>

          {/* Current Bid */}
          <div className="flex flex-col items-end h-min bg-[#514CFF26] rounded-lg px-2 py-1 shrink-0">
            <p className="font-semibold text-[#514CFF] text-[10px]">
              {item.value} ETH
            </p>
          </div>
        </div>

        {/* Bidding Info & Like Button */}
        <div className="flex justify-between mt-1 ">
          <p className="text-[10px] text-[#7780A1]">
            {item.bids} people are bidding
          </p>

          {/* Like Button */}
          <div onClick={() => setLiked(!liked)}>
            <SvgLoader
              width={20}
              height={20}
              fileName={liked ? "tiny heart filled.svg" : "tiny heart.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ThirdSection Component
 * - Displays a list of top NFTs available at a lower price.
 * - Includes a "Show me more" button for additional browsing.
 */
function ThirdSection() {
  return (
    <div className="flex flex-col relative border border-[#262840] w-[320px] h-[700px] p-8 rounded-2xl">
      {/* Section Title */}
      <h1 className="font-semibold text-[26px] mb-10 text-left">
        Top NFT at a lower price
      </h1>

      {/* List of NFT Blocks */}
      <div className="space-y-4">
        {nfts.map((item, index) => (
          <Blocks key={index} item={item} />
        ))}
      </div>

      {/* "Show me more" Button */}
      <button
        className="text-[12px] absolute bottom-2.5 w-[90%] self-center my-4 border border-[#262840] py-2 text-[#7780A1] rounded-md"
        title="more"
      >
        Show me more
      </button>
    </div>
  );
}

export default ThirdSection;

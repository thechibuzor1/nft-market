"use client";

import Image from "next/image";
import SvgLoader from "../SvgLoader";
import { useState } from "react";
import { useRouter } from "next/navigation";

const nfts = [
  {
    title: "Vulputate velit viverra volutpat volutpat tristique",
    value: 1.25,
    time: "22:59",
    bids: 101,
    cover: "/images/nfts/blkimg1.png",
  },
  {
    title: "Egestas blandit sit egestas non sed. Purus semper",
    value: 1.25,
    time: "22:59",
    bids: 101,
    cover: "/images/nfts/blkimg2.png",
  },
  {
    title: "Id ut consequat netus nec vel amet ut porta in augue",
    value: 1.25,
    time: "22:59",
    bids: 101,
    cover: "/images/nfts/blkimg3.png",
  },
  {
    title: "Sed et nibh felis integer tellus turpin",
    value: 1.25,
    time: "22:59",
    bids: 101,
    cover: "/images/nfts/blkimg4.png",
  },
];

function Blocks({ item }: { item: any }) {
  const [liked, setLiked] = useState<boolean>(false);
   const router = useRouter();
  return (
    <div  onClick={() => router.push("/details")}
       className="flex flex-row cursor-pointer ">
      <Image
        alt="nft"
        height={100}
        width={100}
        src={item.cover}
        className="w-[100px] h-[100px] rounded-xl"
      />
      <div className="flex flex-col ml-3">
        <h3 className="font-semibold leading-none line-clamp-2 overflow-hidden text-ellipsis mb-2 text-[14px]">
          {item.title}
        </h3>

        <div className="flex flex-row items-center mb-2 justify-between">
          <div className="flex flex-row items-center space-x-2">
            <SvgLoader fileName="tiny clock.svg" />
            <p className="text-[10px]">{item.time}</p>
          </div>

          <div className="flex flex-col items-end h-min bg-[#514CFF26] rounded-lg px-2 py-1 shrink-0">
            <p className="font-semibold text-[#514CFF] text-[10px]">{item.value} ETH</p>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-[10px] text-[#7780A1]">
            {item.bids} people are bidding
          </p>

          <div onClick={() => setLiked(!liked)}>
            <SvgLoader
              fileName={liked ? "tiny heart filled.svg" : "tiny heart.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdSection() {
  return (
    <div className="flex flex-col relative border border-[#262840] w-full sm:w-[320px] h-[700px] p-8 rounded-2xl">
      <h1 className="font-semibold text-[26px] mb-10 text-left">
        Top NFT at a lower price
      </h1>

      <div className="space-y-4">
        {nfts.map((item, index) => (
          <Blocks key={index} item={item} />
        ))}
      </div>

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

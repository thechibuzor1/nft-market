import Image from "next/image";
import SvgLoader from "../SvgLoader";
import { useState } from "react";
import Link from "next/link";
import { Auction } from "../../../../constants";

function AuctionBlocks({ item }: { item: Auction }) {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="cursor-pointer p-4 w-[320px] hover:bg-[#110f31] transition rounded-2xl border border-[#262840]">
      <Link href="/details">
        <Image
          width={350}
          height={400}
          className="h-[400px] w-full object-cover rounded-2xl mb-5"
          src={item.cover}
          alt=""
        />
      </Link>

      <Link href="/details">
        <div className="flex flex-row justify-between items-start h-[65px]">
          <h2 className="text-white font-semibold w-[60%] line-clamp-2 overflow-hidden text-ellipsis">
            {item.title}
          </h2>
          <div className="flex flex-col items-end h-min bg-[#514CFF26] rounded-lg px-4 py-2 shrink-0">
            <p className="font-semibold text-[#514CFF] text-[14px]">
              {item.value} ETH
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-row items-center mb-5 space-x-1">
        <SvgLoader width={15} height={15} fileName="tiny clock.svg" />
        <p className="font-[400] text-white text-[12px]">
          {item.time} min left
        </p>
      </div>

      <div className="w-[95%] self-center h-[1px] bg-[#262840]" />

      <div className="flex mt-4 justify-between items-center">
        <div className="flex ">
          {item.profiles?.map((profile: string, i: number) => (
            <Image
              key={i}
              width={32}
              height={32}
              className={`h-[32px] w-[32px] border-2 border-black rounded-full ${
                i !== 0 ? "-ml-2" : ""
              }`}
              src={profile}
              alt=""
            />
          ))}
        </div>

        <p className="text-[400] text-[12px]">
          {item.bids} people are bidding
        </p>
        <div
          onClick={() => setLiked(!liked)}
          className="flex flex-row items-center space-x-1"
        >
          <SvgLoader
            width={20}
            height={20}
            fileName={liked ? "tiny heart filled.svg" : "tiny heart.svg"}
          />
          <p className="text-[400] text-[12px] ">{item.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default AuctionBlocks;

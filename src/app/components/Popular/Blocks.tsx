import Image from "next/image";
import SvgLoader from "../SvgLoader";
import { useState } from "react";
import Link from "next/link";
import { Auction } from "../../../../constants";

function PopularBlocks({ item }: { item:  Auction}) {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div
      className="p-4 cursor-pointer w-[200px] hover:bg-[#110f31] transition rounded-2xl"
    >
      <Link href="/details">
        <Image
          width={200}
          height={300}
          className="h-[280px] w-full object-cover rounded-2xl mb-5"
          src={item.cover}
          alt=""
        />

        <div className="flex items-start h-[65px]">
          <h2 className="font-semibold line-clamp-2 overflow-hidden text-ellipsis">
            {item.title}
          </h2>
        </div>
      </Link>
      <div className="flex flex-row justify-between mb-5">
        <div className="flex flex-row items-center space-x-2">
          <SvgLoader
            width={15}
            height={15}
            fileName="tiny clock.svg"
            className=""
          />
          <p className="text-[400] text-[12px]">{item.time}</p>
        </div>

        <div className="text-[#514CFF] flex flex-col items-end h-min bg-[#514CFF26] rounded-lg px-2 py-1 shrink-0">
          <p className="font-semibold text-[#514CFF] text-[12px]">
            {item.value} ETH
          </p>
        </div>
      </div>

      <div className="w-[95%] self-center h-[1px] bg-[#262840]" />

      <div className="flex mt-4 justify-between items-center">
        <p className="text-[400] text-[11px] text-[#7780A1]">
          {item.bids} people are bidding
        </p>

        <div
          onClick={() => setLiked(!liked)}
          className="flex flex-row items-center space-x-1 cursor-pointer"
        >
          <SvgLoader
            width={20}
            height={20}
            fileName={liked ? "tiny heart filled.svg" : "tiny heart.svg"}
            className=""
          />
          <p className="text-[400] text-[12px]">{item.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default PopularBlocks;

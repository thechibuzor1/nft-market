import Image from "next/image";
import React from "react";
import SvgLoader from "../components/SvgLoader";

function FloatingIcons({ name }: { name: string }) {
  return (
    <div className="p-6 border border-[#262840] bg-[#060714] rounded-full w-14 h-14 flex items-center justify-center">
      <SvgLoader fileName={name} />
    </div>
  );
}

function Body() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="relative border border-[#262840] rounded-2xl p-6 flex flex-col md:flex-row max-w-4xl w-full">
        
        {/* Floating Icons */}
        <div className="absolute right-[-28px] top-[5%] flex flex-col space-y-4">
          {["tiny heart filled.svg", "copy.svg", "share.svg"].map((icon) => (
            <FloatingIcons key={icon} name={icon} />
          ))}
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/details/details.jpeg"
            alt="Artwork"
            width={500}
            height={700}
            className="rounded-2xl h-full object-cover w-full"
          />
          <SvgLoader
            fileName="Arrow.svg"
            className="absolute bottom-2 cursor-pointer left-1/2 -translate-x-1/2"
          />
        </div>

        {/* Details Section */}
        <div className="md:ml-6 mt-6 md:mt-0 p-6 w-full md:w-1/2 text-white">
          <h2 className="text-3xl font-bold">
            Dui accumsan leo vestibulum ornare
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          {/* Creator & Collection Info */}
          <div className="flex items-center mt-4 space-x-3">
            {[
              { img: "/images/profiles/profile1.jpeg", label: "Creator", name: "@brock_sim" },
              { img: "/images/auction/Auctionimg1.jpeg", label: "Collection", name: "Afterlife" },
            ].map(({ img, label, name }) => (
              <div key={name} className="flex items-center space-x-4 px-3 py-1 rounded-lg">
                <Image src={img} alt={label} width={32} height={32} className="rounded-full" />
                <div className="flex flex-col">
                  <p className="text-[12px] text-gray-400">{label}</p>
                  <span className="text-[12px]">{name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing & Bidding Info */}
          <div className="mt-6 bg-[#060714] border border-[#262840] p-8 py-6 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p className="text-[12px] text-gray-400">Current price</p>
                <h1 className="font-semibold text-3xl">
                  5.25<span className="text-lg ml-2">ETH</span>
                </h1>
              </div>
              <div>
                <p className="text-[12px] text-gray-400">Time left</p>
                <h2 className="text-xl font-bold">22:59 min</h2>
                <p className="text-[12px] text-gray-400">01.01.2022 - 01:40:47</p>
              </div>
            </div>
            <button className="w-full text-sm mt-4 bg-[#2A27C9] hover:bg-blue-500 text-white py-2 rounded-lg">
              Place a bid
            </button>
          </div>

          {/* Bidding History */}
          <div className="mt-6">
            <p className="text-[12px] text-gray-400">History of bids (12 people are bidding)</p>
            <SvgLoader fileName="graph.svg" className="w-full" />
            <div className="w-full bg-[#7780A1] rounded-lg mt-2">
              <div className="bg-[#262840] h-0.5 rounded-lg w-[60%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;

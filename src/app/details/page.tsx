"use client";
import Image from "next/image";
import TopBar from "../components/Header/TopBar";

import { useState } from "react";

import Footer from "../components/Footer/Footer";
import MoreFrom from "./MoreFrom";

function page() {
  const [timeLeft, setTimeLeft] = useState("22:59 min");
  const [currentPrice, setCurrentPrice] = useState("5.25 ETH");
  return (
    <>
      <TopBar />

      <div className="flex justify-center items-center min-h-screen p-6">
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row max-w-4xl w-full">
          <div className="relative w-full md:w-1/2">
            <Image
              src="/images/details/details.jpeg"
              alt="Artwork"
              width={500}
              height={700}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="md:ml-6 mt-6 md:mt-0 w-full md:w-1/2 text-white">
            <h2 className="text-2xl font-bold">
              Dui accumsan leo vestibulum ornare
            </h2>
            <p className="text-gray-400 mt-2">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
            <div className="flex items-center mt-4 space-x-3">
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <Image
                  src="/images/profiles/profile1.jpeg"
                  alt="Creator Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm">@brock_sim</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-lg">
                <span className="text-sm">Collection: Afterlife</span>
              </div>
            </div>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between">
                <div>
                  <p  >Current price</p>
                  <h1 className="text-xl font-bold">{currentPrice}</h1>
                </div>
                <div>
                  <p >Time left</p>
                  <div className="flex items-center text-xl font-bold">
                     
                    <h2>{timeLeft}</h2>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-[#4745D0] hover:bg-blue-500 text-white py-2 rounded-lg">
                Place a bid
              </button>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">
                History of bids (12 people are bidding)
              </p>
              <div className="w-full bg-gray-700 rounded-lg h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-lg"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreFrom/> 
    <Footer/>
    </>
  );
}

export default page;

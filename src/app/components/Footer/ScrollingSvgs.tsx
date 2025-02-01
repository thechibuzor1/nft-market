"use client";
import Image from "next/image";

const floatingSvgs = [
  { fileName:  "images/floatingnfts/f4.jpeg", name: "2.55 ETH",   },
  { fileName:  "images/floatingnfts/f2.jpeg", name: "2.55 ETH",   },
  { fileName:  "images/floatingnfts/f5.jpeg", name: "2.55 ETH",   },
  { fileName:  "images/floatingnfts/f3.jpeg", name: "2.55 ETH",   },
  { fileName:  "images/floatingnfts/f6.jpeg", name: "2.55 ETH",   },
  { fileName:  "images/floatingnfts/f1.jpeg", name: "2.55 ETH",  },
];

 
 

// Duplicate the array to create a seamless infinite scroll effect
 
const duplicatedSvgs = Array(10).fill(floatingSvgs).flat();

function ScrollingSvgs() {
  return (
    <div className="w-full overflow-hidden py-8">
  <div className="flex space-x-4 animate-scroll  w-max">
    {duplicatedSvgs.map((svg, index) => (
      <div key={index} className="flex  flex-col">
        <Image 
          alt="floating" 
          width={64} 
          height={64} 
          src={svg.fileName} 
          className="w-16 h-16 rounded-2xl shadow-[0px_6px_12px_rgba(255,255,255,0.2)]"
        />
        <p className="text-[10px] mt-1 text-center">{svg.name}</p>
      </div>
    ))}
  </div>
</div>

  );
}

export default ScrollingSvgs;

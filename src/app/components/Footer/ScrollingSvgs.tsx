"use client";

import SvgLoader from "../SvgLoader";

const floatingSvgs = [
  { fileName: "float 01.svg" },
  { fileName: "float 02.svg" },
  { fileName: "float 03.svg" },
  { fileName: "float 04.svg" },
  { fileName: "float 05.svg" },
];

// Duplicate the array to create a seamless infinite scroll effect
const duplicatedSvgs = [
  ...floatingSvgs,
  ...floatingSvgs,
  ...floatingSvgs,
  ...floatingSvgs,
];

function ScrollingSvgs() {
  return (
    <div className="w-full overflow-hidden  py-4">
      <div className="flex animate-scroll">
        {duplicatedSvgs.map((svg, index) => (
          <SvgLoader key={index} fileName={svg.fileName} />
        ))}
      </div>
    </div>
  );
}

export default ScrollingSvgs;

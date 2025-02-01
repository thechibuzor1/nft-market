import Image from "next/image";

const floatingSvgs = [
  { fileName:  "images/floatingnfts/f4.jpeg", name: "2.55 ETH", top: "15%", left: "75%" },
  { fileName:  "images/floatingnfts/f2.jpeg", name: "2.55 ETH", top: "25%", left: "10%" },
  { fileName:  "images/floatingnfts/f5.jpeg", name: "2.55 ETH", top: "35%", left: "85%" },
  { fileName:  "images/floatingnfts/f3.jpeg", name: "2.55 ETH", top: "50%", left: "20%" },
  { fileName:  "images/floatingnfts/f6.jpeg", name: "2.55 ETH", top: "60%", left: "70%" },
  { fileName:  "images/floatingnfts/f1.jpeg", name: "2.55 ETH", top: "75%", left: "10%" },
];

const FloatingSVGs: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
      {floatingSvgs.map((svg, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center animate-float transition-all"
          style={{
            top: svg.top,
            left: svg.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image alt='floating' width={50} height={50} src={svg.fileName} className="w-16  shadow-[0px_6px_12px_rgba(255,255,255,0.2)] rounded-2xl h-16" />
          <p className="text-[12px] mt-1">{svg.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FloatingSVGs;

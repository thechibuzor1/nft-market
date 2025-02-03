import Image from "next/image";
import { floatingSvgs } from "../../../../constants";



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
          <Image alt='floating' width={50} height={50} src={svg.fileName} className="w-20  shadow-[0px_6px_12px_rgba(255,255,255,0.2)] rounded-2xl h-20" />
          <p className="text-[12px] mt-1">{svg.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FloatingSVGs;

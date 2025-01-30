import SvgLoader from "../SvgLoader";

const floatingSvgs = [
  { fileName: "float 01.svg", name: "2.55 ETH", top: "15%", left: "70%" },
  { fileName: "float 02.svg", name: "2.55 ETH", top: "25%", left: "10%" },
  { fileName: "float 03.svg", name: "2.55 ETH", top: "35%", left: "85%" },
  { fileName: "float 04.svg", name: "2.55 ETH", top: "50%", left: "20%" },
  { fileName: "float 05.svg", name: "2.55 ETH", top: "60%", left: "60%" },
  { fileName: "float 06.svg", name: "2.55 ETH", top: "75%", left: "10%" },
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
          <SvgLoader fileName={svg.fileName} className="w-16 h-16 md:w-48 md:h-48" />
        </div>
      ))}
    </div>
  );
};

export default FloatingSVGs;

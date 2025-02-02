import SvgLoader from "../SvgLoader";

function BottomLogos() {
  return (
    <div className="flex  justify-between items-center w-[75%] py-8">
      <SvgLoader fileName="Ritter Sport.svg" className="w-16 h-16" />
      <SvgLoader fileName="Nike.svg" className="w-16 h-16 " />
      <SvgLoader fileName="Adidas.svg" className="w-16 h-16" />
      <SvgLoader fileName="New Holland.svg" className="w-16 h-16" />
    </div>
  );
}

export default BottomLogos;

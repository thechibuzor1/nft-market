import SvgLoader from "../SvgLoader";

function BottomLogos() {
  return (
    <div className="flex flex-wrap absolute bottom-0 justify-center items-center gap-4 sm:gap-6 p-6 sm:p-10">
      <SvgLoader fileName="Ritter Sport.svg" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
      <SvgLoader fileName="Nike.svg" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
      <SvgLoader fileName="Adidas.svg" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
      <SvgLoader fileName="New Holland.svg" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
    </div>
  );
}

export default BottomLogos;

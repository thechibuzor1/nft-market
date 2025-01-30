import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function TripleSection() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-6 md:space-y-0 justify-center w-full px-4 md:px-0">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default TripleSection;

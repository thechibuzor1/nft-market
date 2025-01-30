import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

/**
 * TripleSection Component
 * 
 * - Renders three sections (`FirstSection`, `SecondSection`, and `ThirdSection`).
 * - Uses a flexible layout that adjusts between column and row layouts based on screen size.
 */

function TripleSection() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-6 md:space-y-0 justify-center w-full px-4 md:px-0">
      {/* First Content Section */}
      <FirstSection />

      {/* Second Content Section */}
      <SecondSection />

      {/* Third Content Section */}
      <ThirdSection />
    </div>
  );
}

export default TripleSection;

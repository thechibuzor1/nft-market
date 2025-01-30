import SvgLoader from "../SvgLoader";
import LoadHand from "./LoadHand";

/**
 * SecondSection Component
 * - A card-style section that encourages users to start creating & selling NFTs.
 * - Contains decorative SVGs and a call-to-action button.
 */
function SecondSection() {
  return (
    <div className="flex flex-col relative items-center bg-[#1C1D29] w-[320px] h-[700px] rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none">
      {/* Background Decorative SVGs */}
      <SvgLoader fileName="s2.svg" className="absolute left-0 top-[-2%]" />
      <LoadHand fileName="hand.svg" className="absolute top-[-17%]" />

      {/* Bottom Content Section */}
      <div className="absolute bottom-0 p-4">
        {/* Heading */}
        <h2 className="font-semibold leading-none mb-2 text-[24px]">
          Get started creating & selling your NFTs
        </h2>

        {/* Description */}
        <p className="text-[12px] text-[#7780A1]">
          Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.
        </p>

        {/* CTA Button */}
        <button
          className="text-[12px] w-[100%] bg-[#4745D0] my-4 border border-[#262840] py-2 rounded-md"
          title="more"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default SecondSection;

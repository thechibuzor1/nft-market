import Image from "next/image";
import SvgLoader from "../SvgLoader";

function Habitant() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 justify-center w-full my-10 px-4 md:px-0">
      {/* Illustration Section */}
      <div className="mt-6 md:mt-0 flex justify-center w-full max-w-[500px] md:max-w-[600px]">
        {/* SVG Loader for the Habitant Illustration */}
        <Image
          width={200}
          height={200}
          alt="overline"
          className="animate-float w-full h-auto"
          src="/images/habitant.png"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col max-w-xl w-full">
        {/* Overline Text */}
        <p className="text-[15px] font-[500] text-[#7780A1]">Overline</p>

        {/* Main Heading */}
        <h1 className="font-[600] text-[32px] md:text-[64px] leading-none">
          Habitant tristique aliquam in vel scelerisque
        </h1>

        {/* Description Paragraph */}
        <p className="text-[15px] text-[#7780A1] my-6">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>

        {/* Feature Highlight Section */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-x-8 md:space-y-0">
          {/* First Feature */}
          <div>
            <SvgLoader fileName="tiny-h1.svg" className="mb-6" />
            <h2 className="font-semibold">Sollicitudin sapien</h2>
            <p>Cursus fermentum</p>
          </div>

          {/* Second Feature */}
          <div>
            <SvgLoader fileName="tiny-h2.svg" className="mb-6" />
            <h2 className="font-semibold">Pulvinar metus</h2>
            <p>Nunc sed</p>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          {/* Get Started Button */}
          <button className="px-6 py-3 border-2 border-[#262840] text-[16px] rounded-xl bg-[#2A27C9] text-white">
            Get started
          </button>

          {/* Learn More Button */}
          <button className="px-6 py-3 border-2 border-[#262840] text-[16px] text-[#7780A1] rounded-xl bg-transparent">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Habitant;

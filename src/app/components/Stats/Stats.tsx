import Image from "next/image";
import { stat_data } from "../../../../constants"; // Stats Data
import SvgLoader from "../SvgLoader";

// Individual Stat Item Component
function StatItem({
  svg,
  number,
  stat,
}: {
  svg: string;
  number: string;
  stat: string;
}) {
  return (
    <div className="flex flex-col items-center text-center w-full sm:w-auto">
      <SvgLoader width={30} height={30} fileName={svg} />
      <h1 className="text-[16px] md:text-[48px] leading-none mt-4">{number}</h1>
      <p className="text-sm mt-2 text-[#7780A1]">{stat}</p>
    </div>
  );
}

// Stats Section Component
function Stats() {
  return (
    <div className="flex flex-col justify-center py-10">
      {/* Divider Line */}
      <div className="w-[65%] sm:w-full self-center h-[1px] bg-[#262840]" />

      {/* Stats Display - Responsive Layout */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-16 pt-10">
        {stat_data.map((item, index) => (
          <StatItem key={index} {...item} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full sm:w-[65%] self-center px-4 sm:px-20 py-10 mt-14 bg-[#1C1D29] rounded-xl relative">
        {/* Top SVG */}
        <SvgLoader
          width={300}
          height={100}
          fileName="Pleat.svg"
          className="absolute left-0 top-[-4%]"
        />

        {/* Left: Text Content */}
        <div className="flex flex-col max-w-full sm:max-w-xl md:text-left w-full px-4 sm:px-6 md:w-1/2">
          <p className="text-[15px] font-medium mb-4 text-[#7780A1]">
            Overline
          </p>
          <h1 className="font-semibold text-[24px] sm:text-[32px] md:text-[48px] leading-none">
            Cursus vitae sollicitudin donec nascetur. Join now
          </h1>
          <p className="text-[15px] text-[#7780A1] my-6">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button className="px-6 py-3 border-2 border-[#262840] text-[16px] rounded-xl bg-[#2A27C9] text-white">
              Get started
            </button>
            <button className="px-6 py-3 border-2 border-[#262840] text-[16px] text-[#7780A1] rounded-xl bg-transparent">
              Learn more
            </button>
          </div>
        </div>

        {/* Right: Floating SVG */}
        <div className="mt-6 md:mt-0 flex justify-center w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
          <Image
            width={200}
            height={200}
            alt="overline"
            className="animate-float w-full h-auto"
            src="/images/Users.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;

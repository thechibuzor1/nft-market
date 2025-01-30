import SvgLoader from "../SvgLoader";

const data = [
  {
    svg: "profile.svg",
    number: "300k",
    stat: "Users Active",
  },
  {
    svg: "Artworks.svg",
    number: "52,5k",
    stat: "Artworks",
  },
  {
    svg: "artists.svg",
    number: "17,5k",
    stat: "Artists",
  },
  {
    svg: "eth.svg",
    number: "35.58",
    stat: "ETH Spent",
  },
];

function StatItems({
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
      <SvgLoader fileName={svg} />
      <h1 className="text-[16px] md:text-[24px] leading-none mt-4">{number}</h1>
      <p className="text-sm text-[#7780A1]">{stat}</p>
    </div>
  );
}

function Stats() {
  return (
    <div className="flex flex-col justify-center py-10">
      <div className="w-[65%] sm:w-full self-center h-[1px] bg-[#262840]" />

      {/* Stats Section - Stacks on mobile, horizontal on large screens */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6 pt-10">
        {data.map((item, index) => (
          <StatItems key={index} svg={item.svg} number={item.number} stat={item.stat} />
        ))}
      </div>

      {/* CTA Section - Stacks on small screens, horizontal on larger screens */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full sm:w-[65%] self-center px-4 sm:px-20 py-10 mt-14 bg-[#1C1D29] rounded-xl relative">
        <SvgLoader fileName="Pleat.svg" className="absolute left-0 top-[-4%]" />
        
        {/* Text Content */}
        <div className="flex flex-col max-w-full sm:max-w-xl md:text-left w-full px-4 sm:px-6 md:w-1/2">
  <p className="text-[15px] font-medium mb-4 text-[#7780A1]">Overline</p>

  <h1 className="font-semibold text-[24px] sm:text-[32px] md:text-[48px] leading-none">
    Cursus vitae sollicitudin donec nascetur. Join now
  </h1>

  <p className="text-[15px] text-[#7780A1] my-6">
    Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
    pulvinar ultricies dolor feugiat aliquam commodo.
  </p>

  <div className="flex flex-col sm:flex-row gap-3 mt-5">
    <button className="px-6 py-3 border-2 border-[#262840] text-[16px] rounded-xl bg-[#4745D0] text-white">
      Get started
    </button>
    <button className="px-6 py-3 border-2 border-[#262840] text-[16px] text-[#7780A1] rounded-xl bg-transparent">
      Learn more
    </button>
  </div>
</div>


        {/* Image Content */}
        <div className="mt-6 md:mt-0 flex justify-center w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]">
          <SvgLoader className="animate-float w-full h-auto" fileName="users.svg" />
        </div>
      </div>
    </div>
  );
}

export default Stats;

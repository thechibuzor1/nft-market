import SvgLoader from "../SvgLoader";

function Overline() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-4 md:px-0">
      <div className="flex flex-col max-w-xl w-full md:mr-4">
        <p className="text-[12px] sm:text-[14px] md:text-[15px] font-[500] mb-4 text-[#7780A1]">Overline</p>

        <h1 className="font-[600] text-[32px] sm:text-[48px] md:text-[64px] leading-none">
          Sapien ipsum scelerisque convallis fusce
        </h1>

        <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#7780A1] my-6">
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

      <div className="mt-6 md:mt-0 flex justify-center w-full max-w-[500px] md:max-w-[600px]">
        <SvgLoader className="animate-float w-full h-auto" fileName="overline.svg" />
      </div>
    </div>
  );
}

export default Overline;

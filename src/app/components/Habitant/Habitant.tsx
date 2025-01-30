import SvgLoader from "../SvgLoader";

function Habitant() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 justify-center w-full my-10 px-4 md:px-0">
      <div className="mt-6 md:mt-0 flex justify-center w-full max-w-[500px] md:max-w-[600px]">
        <SvgLoader className="animate-float w-full h-auto" fileName="habitant.svg" />
      </div>

      <div className="flex flex-col max-w-xl w-full">
        <p className="text-[15px] font-[500] text-[#7780A1]">Overline</p>

        <h1 className="font-[600] text-[32px] md:text-[64px] leading-none">
          Habitant tristique aliquam in vel scelerisque
        </h1>

        <p className="text-[15px] text-[#7780A1] my-6">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>

        <div className="flex flex-col md:flex-row space-y-6 md:space-x-8 md:space-y-0">
          <div>
            <SvgLoader fileName="tiny-h1.svg" className="mb-6" />
            <h2 className="font-semibold">Sollicitudin sapien</h2>
            <p>Cursus fermentum</p>
          </div>

          <div>
            <SvgLoader fileName="tiny-h2.svg" className="mb-6" />
            <h2 className="font-semibold">Pulvinar metus</h2>
            <p>Nunc sed</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button className="px-6 py-3 border-2 border-[#262840] text-[16px] rounded-xl bg-[#4745D0] text-white">
              Get started
            </button>
            <button className="px-6 py-3 border-2 border-[#262840] text-[16px] text-[#7780A1] rounded-xl bg-transparent">
              Learn more
            </button>
          </div>
      </div>
    </div>
  );
}

export default Habitant;

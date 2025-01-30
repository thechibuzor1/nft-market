
import SvgLoader from "../SvgLoader"
import LoadHand from "./LoadHand"

function SecondSection() {
  return (
    <div className="flex flex-col relative items-center bg-[#1C1D29] w-[320px] h-[700px] rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-none">
       <SvgLoader  fileName="s2.svg"  className="absolute left-0 top-[-2%]"/>
       <LoadHand  fileName="hand.svg"  className="absolute top-[-17%]"/>
        <div className="absolute bottom-0 p-4">
        <h2 className="font-semibold leading-none mb-2 text-[24px]">Get started creating & selling your NFTs</h2>
        <p className="text-[12px] text-[#7780A1]">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.</p>
        

        <button className="text-[12px] w-[100%] bg-[#4745D0] my-4 border border-[#262840] py-2  rounded-md" title="more">
        Get started
      </button>
        </div>
        
        </div>
  )
}

export default SecondSection
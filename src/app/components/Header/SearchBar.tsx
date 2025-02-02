import SvgLoader from "../SvgLoader";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center mt-4 h-[65px] bg-white rounded-2xl shadow-lg p-2 w-[100%] md:w-[75%]">
 <input
        type="text"
        placeholder="Items, collections and creators"
        className="flex-grow text-[#262840]  text-[14px] px-1 sm:px-4 outline-none bg-transparent"
      />
      <div className="w-px bg-gray-300 h-5 sm:h-6 mx-2 sm:mx-3"/>
      <select title="select" className="text-[#262840] text-[12px]   bg-transparent outline-none">
        <option>Category</option>
        <option>Best Sellers</option>
        <option>Trending</option>
      </select>
      <SvgLoader fileName="Search.svg" className="ml-2 sm:ml-3 p-1 sm:p-2 text-[#2A27C9] w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 cursor-pointer" />
    </div>
  );
};

export default SearchBar;

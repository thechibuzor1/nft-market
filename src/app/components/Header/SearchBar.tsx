import SvgLoader from "../SvgLoader";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <input
        type="text"
        placeholder="Items, collections and creators"
        className="flex-grow text-gray-500 text-sm sm:text-base px-2 sm:px-4 outline-none bg-transparent"
      />
      <div className="w-px bg-gray-300 h-5 sm:h-6 mx-2 sm:mx-3"></div>
      <select title="select" className="text-gray-700 text-xs sm:text-sm md:text-base bg-transparent outline-none">
        <option>Category</option>
      </select>
      <SvgLoader fileName="Search.svg" className="ml-2 sm:ml-3 p-1 sm:p-2 text-[#2A27C9] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
    </div>
  );
};

export default SearchBar;

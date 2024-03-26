import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchItem, handleInputChange }) {
  return (
    <div className="relative mt-4 ">
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 pl-10 shadow-md focus:outline-none focus:ring focus:border-violet-400 w-1/2 "
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <div className="absolute inset-y-0 left-1/4 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  );
}

import { BiSearch } from "react-icons/bi";

export default function SearchBar({ searchItem, handleInputChange }) {
  return (
    <form className="max-w-md">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative">
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
          className="block w-full p-4 pl-10 pr-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <BiSearch />
        </div>
      </div>
    </form>
  );
}

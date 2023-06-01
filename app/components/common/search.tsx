import { SearchIcon } from '@/public/icons';

const Search = () => {
  return (
    <form className="flex justify-between items-center mt-8 w-[90%] mx-auto border border-gray-4 rounded-lg py-2 px-4">
      <input
        type="search"
        className="placeholder:text-black border-none focus:ring-0 w-full"
        placeholder="جستجو"
      />
      <div className="w-[15px]">
        <SearchIcon />
      </div>
    </form>
  );
};
export default Search;

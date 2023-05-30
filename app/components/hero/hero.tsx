import { SearchIcon } from '@/public/icons';
import Search from '../common/search';

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between items-center md:hidden mt-8 w-2/3 mx-auto border border-gray-4 rounded-lg py-2 px-4">
        <Search />
        <div className="w-[15px]">
          <SearchIcon />
        </div>
      </div>
    </section>
  );
};
export default Hero;

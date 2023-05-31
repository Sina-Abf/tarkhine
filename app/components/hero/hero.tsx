import { SearchIcon } from '@/public/icons';
import Search from '../common/search';
import RestaurantMenu from './restaurant-menu';

const Hero = () => {
  return (
    <section>
      <div className="flex justify-between items-center md:hidden mt-8 w-[90%] mx-auto border border-gray-4 rounded-lg py-2 px-4">
        <Search />
        <div className="w-[15px]">
          <SearchIcon />
        </div>
      </div>
      <RestaurantMenu />
    </section>
  );
};
export default Hero;

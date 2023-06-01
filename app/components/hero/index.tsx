import { SearchIcon } from '@/public/icons';
import Search from '../common/search';
import RestaurantMenu from './restaurant-menu';

const Hero = () => {
  return (
    <section>
      <div className="md:hidden">
        <Search />
      </div>
      <RestaurantMenu />
    </section>
  );
};
export default Hero;

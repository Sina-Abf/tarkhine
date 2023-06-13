import Slider from '@/app/components/slider';
import ekbatanImage from '../../../public/images/slider/ekbatan.png';
import mobileImage from '../../../public/images/slider/slider-mobile.png';
import Search from '@/app/components/common/search';
import FoodRow from './components/food-row';
import { Button } from '@/app/components/common/button';
import { MenuIcon } from '@/public/icons';
import BranchDetails from './components/branch-details';
import detailsPic from '../../../public/images/branches/Ekbatan-2.png';
// Slider Data
const SLIDER_DATA = [
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اینجا دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 1,
  },
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اینجا دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 2,
  },
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اینجا دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 3,
  },
];

// Food Row Data
const FOOD_ROW_DATA = [
  {
    title: 'پیشنهاد ویژه',
    url: 'special-foods',
  },
  {
    title: 'غذا های محبوب',
    className: 'bg-primary p-4',
    titleClassName: 'text-white',
    foodItemClassName: 'border-none',
    url: 'popular-foods',
  },
  {
    title: 'غذاهای غیر ایرانی',
    url: 'foregion-foods',
  },
];

const BranchName = () => {
  return (
    <section className="">
      <Slider items={SLIDER_DATA} />
      <Search hidden />
      {FOOD_ROW_DATA.map((food, i) => (
        <FoodRow key={i} {...food} />
      ))}
      <div className="w-full flex justify-center">
        <Button
          variant="transparent"
          className="flex items-center border-2 border-primary py-2 px-4 hover:bg-primary group"
        >
          <span className="fill-primary w-[20px] h-[20px] group-hover:fill-white">
            <MenuIcon />
          </span>
          <span className="text-primary font-medium text-2xl group-hover:text-white">
            مشاهده منوی کامل
          </span>
        </Button>
      </div>
      <BranchDetails image={detailsPic} />
    </section>
  );
};
export default BranchName;

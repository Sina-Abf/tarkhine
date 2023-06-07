import Slider from '@/app/components/slider';
import ekbatanImage from '../../../public/images/slider/ekbatan.png';
import mobileImage from '../../../public/images/slider/slider-mobile.png';
import Search from '@/app/components/common/search';
import FoodRow from './components/food-row';

const SLIDER_DATA = [
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اکباتان دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 1,
  },
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اکباتان دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 2,
  },
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اکباتان دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 3,
  },
];

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
    <section className="p-4">
      <Slider items={SLIDER_DATA} />
      <Search hidden />
      {FOOD_ROW_DATA.map((food, i) => (
        <FoodRow key={i} {...food} />
      ))}
    </section>
  );
};
export default BranchName;

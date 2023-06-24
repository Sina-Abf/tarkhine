import Slider from '@/app/components/slider';
import MenuHeader from './components/menu-header';
import FoodsSection from './components/menu-foods-section';
import { MENU_ROW_DATA } from '@/constants';

const MENU_IMAGE = [
  {
    desktopImage: '/images/slider/menu-slider-image.png',
    mobileImage: '/images/slider/slider-mobile.png',
    title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 1,
  },
  {
    desktopImage: '/images/slider/menu-slider-image.png',
    mobileImage: '/images/slider/slider-mobile.png',
    title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 2,
  },
  {
    desktopImage: '/images/slider/menu-slider-image.png',
    mobileImage: '/images/slider/slider-mobile.png',
    title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 3,
  },
];

const BranchMenu = ({ params }: { params: any }) => {
  return (
    <>
      <Slider items={MENU_IMAGE} />
      <MenuHeader activeParam={params.menu[1]} />
      {MENU_ROW_DATA.map((food, i) => (
        <FoodsSection key={i} index={i} sectionTitle={food.title} {...food} />
      ))}
    </>
  );
};
export default BranchMenu;

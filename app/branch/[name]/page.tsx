import Slider from '@/app/components/slider';
import ekbatanImage from '../../../public/images/slider/ekbatan.png';
import mobileImage from '../../../public/images/slider/slider-mobile.png';

const SLIDER_DATA = [
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اکباتان دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
  },
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اکباتان دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
  },
  {
    desktopImage: ekbatanImage,
    mobileImage: mobileImage,
    title: 'سرسبزی اکباتان دلیل حس خوب شماست!',
    buttonTitle: 'سفارش آنلاین غذا',
  },
];

const BranchName = () => {
  return <Slider items={SLIDER_DATA} />;
};
export default BranchName;

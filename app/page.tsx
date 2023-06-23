import About from './components/about/index';
import Branches from './components/branches/index';
import Hero from './components/hero/index';
import Slider from './components/slider/index';

const SLIDER_DATA = [
  {
    desktopImage: '/images/slider/slider-desktop.png',
    mobileImage: '/images/slider/slider-mobile.png',
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 1,
  },
  {
    desktopImage: '/images/slider/slider-desktop.png',
    mobileImage: '/images/slider/slider-mobile.png',
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 2,
  },
  {
    desktopImage: '/images/slider/slider-desktop.png',
    mobileImage: '/images/slider/slider-mobile.png',
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
    id: 3,
  },
];

export default function Home() {
  return (
    <>
      <Slider items={SLIDER_DATA} />
      <Hero />
      <About />
      <Branches />
    </>
  );
}

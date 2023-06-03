import About from './components/about/index';
import Branches from './components/branches/index';
import Hero from './components/hero/index';
import Slider from './components/slider/index';
import bgDesktop from '../public/images/slider/slider-desktop.png';
import bgMobile from '../public/images/slider/slider-mobile.png';

const SLIDER_DATA = [
  {
    desktopImage: bgDesktop,
    mobileImage: bgMobile,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
  },
  {
    desktopImage: bgDesktop,
    mobileImage: bgMobile,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
  },
  {
    desktopImage: bgDesktop,
    mobileImage: bgMobile,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
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

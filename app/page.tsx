import About from './components/about/index';
import Branches from './components/branches/index';
import Hero from './components/hero/index';
import Slider from './components/slider/index';
import bgDesktop from '../public/images/slider/slider-desktop.png';

const SLIDER_DATA = [
  {
    image: bgDesktop,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
  },
  {
    image: bgDesktop,
    title: 'تجربه غذای سالم و گیاهی به سبک ترخینه',
    buttonTitle: 'سفارش آنلاین غذا',
  },
  {
    image: bgDesktop,
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

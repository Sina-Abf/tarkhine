import About from './components/about/index';
import Branches from './components/branches/index';
import Hero from './components/hero/index';
import Slider from './components/slider/index';

export default function Home() {
  return (
    <>
      <Slider />
      <Hero />
      <About />
      <Branches />
    </>
  );
}

import About from './components/about/about';
import Branches from './components/branches';
import Hero from './components/hero/hero';
import Slider from './components/slider/slider';

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

'use client';
import Image from 'next/image';
import bgDesktop from '../../../public/images/slider-desktop.png';
import bgMobile from '../../../public/images/slider-mobile.png';
import useMediaQuery from '@/hooks/use-media-query';
const Slider = () => {
  const isSmallScreen = useMediaQuery('(max-width: 360px');
  console.log(isSmallScreen);
  return (
    <div>
      {isSmallScreen && <Image src={bgMobile} alt="food-hero" />}
      {!isSmallScreen && <Image src={bgDesktop} alt="food-hero" />}
    </div>
  );
};
export default Slider;

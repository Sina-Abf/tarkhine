import useMediaQuery from '@/hooks/use-media-query';
import Image from 'next/image';
import bgDesktop from '../../../public/images/slider/slider-desktop.png';
import bgMobile from '../../../public/images/slider/slider-mobile.png';
import { Button } from '../common/button';

const SliderImage = () => {
  const isBigScreen = useMediaQuery('(min-width: 600px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {isBigScreen && (
        <div className="relative">
          <Image height={1500} src={bgDesktop} alt="desktop-food-picture" />
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl top-[35%] whitespace-nowrap sm:text-3xl lg:text-5xl font-bold absolute right-1/2 translate-x-1/2">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>
            <Button
              size="small"
              className="absolute md:text-3xl md:px-8 md:py-4 top-[60%] right-1/2 translate-x-1/2 lg:top-[60%]"
            >
              سفارش آنلاین غذا
            </Button>
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div className="relative">
          <Image height={1500} src={bgMobile} alt="desktop-food-picture" />
          <div className=" flex flex-col items-center">
            <h2 className="text-2xl top-[35%] whitespace-nowrap sm:text-3xl lg:text-5xl font-bold absolute right-1/2 translate-x-1/2">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </h2>
            <Button
              size="small"
              className="absolute md:text-3xl md:px-8 md:py-4 top-[60%] right-1/2 translate-x-1/2 lg:top-[60%]"
            >
              سفارش آنلاین غذا
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
export default SliderImage;

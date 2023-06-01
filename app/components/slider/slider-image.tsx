import Image from 'next/image';
import bgDesktop from '../../../public/images/slider/slider-desktop.png';
import bgMobile from '../../../public/images/slider/slider-mobile.png';
import { Button } from '../common/button';

const SliderImage = () => {
  return (
    <>
      <div className="relative ">
        <Image
          className="hidden sliderSize:block"
          height={1500}
          src={bgDesktop}
          alt="desktop-food-picture"
        />
        <Image
          className="sliderSize:hidden"
          height={1500}
          src={bgMobile}
          alt="mobile-food-picture"
        />

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
    </>
  );
};
export default SliderImage;

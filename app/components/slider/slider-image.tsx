import Image, { StaticImageData } from 'next/image';
import bgDesktop from '../../../public/images/slider/slider-desktop.png';
import bgMobile from '../../../public/images/slider/slider-mobile.png';
import { Button } from '../common/button';

const SliderImage = ({
  image,
  title,
  buttonTitle,
  mobileImage,
}: {
  image?: string;
  mobileImage?: string;
  title?: string;
  buttonTitle?: string;
}) => {
  return (
    <>
      <div className="relative">
        <Image
          className="hidden sliderSize:block"
          height={1500}
          width={3000}
          src={image!}
          alt="desktop-food-picture"
          priority
        />
        <Image
          className="sliderSize:hidden"
          height={1500}
          width={3000}
          src={mobileImage!}
          alt="mobile-food-picture"
          priority
        />

        <div className=" flex flex-col items-center">
          <h2 className="text-2xl top-[35%] whitespace-nowrap sm:text-3xl lg:text-5xl font-bold absolute right-1/2 translate-x-1/2">
            {title}
          </h2>
          {buttonTitle && (
            <Button
              size="small"
              className="absolute md:text-3xl md:px-8 md:py-4 top-[60%] right-1/2 translate-x-1/2 lg:top-[60%]"
            >
              {buttonTitle}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default SliderImage;

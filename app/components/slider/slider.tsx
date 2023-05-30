'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import bgDesktop from '../../../public/images/slider-desktop.png';
import bgMobile from '../../../public/images/slider-mobile.png';
import useMediaQuery from '@/hooks/use-media-query';
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    rtl: true,
    created() {
      setLoaded(true);
    },
  });

  // Small Screen Breakpoint
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const imageChoose = (
    <div className="relative">
      <Image
        src={isSmallScreen ? bgMobile : bgDesktop}
        alt="desktop-food-picture"
        height={1000}
      />
      <div className=" flex flex-col items-center">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold absolute top-1/3 right-1/2 xs:top-[40%] translate-x-1/2">
          تجربه غذای سالم و گیاهی به سبک ترخینه
        </h2>
        <button className="bg-primary absolute top-2/3 xs:top-[60%] right-1/2 translate-x-1/2 text-white p-2 md:p-4 md:px-6 text-xl lg:text-2xl lg:top-[60%] rounded-lg hover:bg-shade-2 transition-all duration-300">
          سفارش آنلاین غذا
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">{imageChoose}</div>
          <div className="keen-slider__slide number-slide2">{imageChoose}</div>
          <div className="keen-slider__slide number-slide3">{imageChoose}</div>
          <div className="keen-slider__slide number-slide4">{imageChoose}</div>
          <div className="keen-slider__slide number-slide5">{imageChoose}</div>
          <div className="keen-slider__slide number-slide6">{imageChoose}</div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="-translate-y-[100%] h-[1.5rem] md:h-[2.5rem] px-4 items-center rounded-tl-md rounded-tr-md absolute right-1/2 translate-x-1/2 bg-white flex justify-center w-fit radius-custom">
          {[
            // @ts-ignore
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  'dot' +
                  (currentSlide === idx ? ' active ring ring-tint-1' : '')
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.8805 27.56C11.6271 27.56 11.3738 27.4667 11.1738 27.2667C10.7871 26.88 10.7871 26.24 11.1738 25.8534L19.8671 17.16C20.5071 16.52 20.5071 15.48 19.8671 14.84L11.1738 6.14669C10.7871 5.76003 10.7871 5.12003 11.1738 4.73336C11.5605 4.34669 12.2005 4.34669 12.5871 4.73336L21.2805 13.4267C21.9605 14.1067 22.3471 15.0267 22.3471 16C22.3471 16.9734 21.9738 17.8934 21.2805 18.5734L12.5871 27.2667C12.3871 27.4534 12.1338 27.56 11.8805 27.56Z" />
    </svg>
  );
}

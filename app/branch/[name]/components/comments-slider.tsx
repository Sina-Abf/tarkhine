'use client';
import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';
import { LeftArrowIcon, StarIcon } from '@/public/icons';
import useDynamicScroll from '@/hooks/use-dynamic-scroll';
import classNames from 'classnames';
import persianNumber from '@/helpers/persian-number';

interface CSlider {
  items: {
    thumbnail: string;
    name: string;
    created_at: string;
    comment: string;
    star_count: number;
    id: number;
  }[];
}

const CommentsSlider = ({ items }: CSlider) => {
  // Custom delay for skeleton loading slider
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => setShow(false), 500);
  }, []);

  const { scrollPosition, slideLeft, slideRight, sliderRef } =
    useDynamicScroll(10);

  return (
    <>
      <div className="w-full pb-8">
        <ul
          ref={sliderRef}
          className="relative pb-8 mx-auto w-full flex gap-x-12 px-8 md:px-40 overflow-hidden overflow-x-scroll no-scroll scroll-smooth"
        >
          {items.map((slide, i) => (
            <li
              key={slide.id}
              className="border border-gray-4 flex p-4 justify-between items-center gap-8 rounded-lg md:p-8 min-w-fit"
            >
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={slide.thumbnail}
                  alt={`slide-${i}`}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <div className="text-gray-7 text-center">
                  <h3 className="whitespace-nowrap md:text-2xl">
                    {slide.name}
                  </h3>
                  <h3 className="md:text-lg">{slide.created_at}</h3>
                </div>
              </div>
              <div>
                <p className="text-black max-w-lg mb-4 md:text-xl">
                  {slide.comment}
                </p>
                <div className="flex justify-end items-center w-full text-end text-black">
                  <div className="">
                    <div className="w-[10px] h-[10px] fill-yellow-400 md:w-[15px] md:h-[15px]">
                      <StarIcon />
                    </div>
                  </div>
                  <span className="text-2xl">
                    {persianNumber(slide.star_count)}
                  </span>
                </div>
              </div>
            </li>
          ))}
          <button
            onClick={slideLeft}
            className={classNames(
              'hidden md:block w-[30px] h-[30px] fill-gray-6 shadow-lg rounded-lg p-1 absolute left-0 top-1/2 -translate-y-1/2 bg-white'
            )}
            style={{ left: `${scrollPosition}px` }}
          >
            <LeftArrowIcon />
          </button>
          <button
            onClick={slideRight}
            className={classNames(
              'hidden md:block w-[30px] h-[30px] fill-gray-6 bg-white shadow-lg rounded-lg p-1 absolute top-1/2 -translate-y-1/2',
              scrollPosition === 0 ? 'hidden' : 'block'
            )}
            style={{ right: `${-scrollPosition}px` }}
          >
            <LeftArrowIcon className="rotate-180" />
          </button>
        </ul>
      </div>
    </>
  );
};

export default CommentsSlider;

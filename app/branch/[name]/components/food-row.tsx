'use client';

import getFoods from '@/utils/get-foods';
import FoodItem from './food-item';
import Skeleton from 'react-loading-skeleton';
import { LeftArrowIcon } from '@/public/icons';
import { useRef } from 'react';
import classNames from 'classnames';

const FoodRow = ({
  title,
  className,
  titleClassName,
  foodItemClassName,
  url,
}: {
  title: string;
  className?: string;
  titleClassName?: string;
  foodItemClassName?: string;
  url: string;
}) => {
  const { data, isLoading } = getFoods(url);
  // Dummy Array to have loading state for each food
  const loadingData = new Array(data?.length ?? 8).fill(null);

  // const sliderRef = useRef(null);

  // const slideLeft = () => {
  //   // @ts-ignore
  //   sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500;
  // };
  // const slideRight = () => {
  //   // @ts-ignore
  //   sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500;
  // };

  return (
    <div className={classNames('mb-10', className)}>
      <h2 className={classNames('text-4xl font-bold my-8', titleClassName)}>
        {title || 'عنوان'}
      </h2>
      <ul
        // ref={sliderRef}
        className="relative flex gap-8 overflow-x-scroll no-scrollbar"
      >
        {/* <button
          onClick={slideLeft}
          className="w-[30px] h-[30px] fill-gray-6 bg-white shadow-lg rounded-lg p-1 left-8 absolute top-1/2 -translate-y-1/2"
        >
          <LeftArrowIcon />
        </button>
        <button
          onClick={slideRight}
          className="w-[30px] h-[30px] fill-gray-6 bg-white shadow-lg rounded-lg p-1 right-8 absolute top-1/2 -translate-y-1/2"
        >
          <LeftArrowIcon className="rotate-180" />
        </button> */}
        {isLoading
          ? loadingData.map((_, index) => (
              <Skeleton
                key={index}
                borderRadius={10}
                width={250}
                height={300}
                duration={1}
              />
            ))
          : data?.map((item) => (
              <FoodItem
                key={item.id}
                name={item.name}
                price={item.price}
                score={item.score}
                image={item.image}
                all_scores={item.all_scores}
                discount_percent={item.discount_percent}
                foodItemClassName={foodItemClassName}
              />
            ))}
      </ul>
    </div>
  );
};
export default FoodRow;

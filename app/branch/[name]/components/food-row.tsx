'use client';

import getFoods from '@/utils/get-foods';
import FoodItem from './food-item';
import Skeleton from 'react-loading-skeleton';
import { LeftArrowIcon } from '@/public/icons';
import classNames from 'classnames';
import useDynamicScroll from '@/hooks/use-dynamic-scroll';

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
  // Food Data
  const { data, isLoading } = getFoods(url);

  // Dummy Array to have loading state for each food
  const loadingData = new Array(data?.length ?? 8).fill(null);

  // Dynamic Scrolling Logic
  const { scrollPosition, slideLeft, slideRight, sliderRef } =
    useDynamicScroll();

  return (
    <div className={classNames('mb-10 px-10', className)}>
      <h2 className={classNames('text-4xl font-bold my-8 p-4', titleClassName)}>
        {title || 'عنوان'}
      </h2>
      <ul
        ref={sliderRef}
        className="relative flex gap-8 overflow-x-scroll no-scrollbar transition-all duration-300 scroll-smooth"
      >
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

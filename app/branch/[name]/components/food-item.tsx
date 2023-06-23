import { Button } from '@/app/components/common/button';
import persianNumber from '@/helpers/persian-number';
import { HeartIcon, StarIcon } from '@/public/icons';
import { TFoods } from '@/utils/get-foods';
import classNames from 'classnames';
import Image from 'next/image';

const FoodItem = ({
  image,
  all_scores,
  score,
  discount_percent,
  name,
  price,
  foodItemClassName,
}: TFoods) => {
  // Persian Numbers
  const persianOriginalPrice = persianNumber((+price).toFixed(3));
  const persianDiscount = persianNumber(discount_percent);
  const persianScore = persianNumber(score);
  const persianAllScores = persianNumber(all_scores);
  const persianFinalPrice = persianNumber(
    Math.floor(+price - +discount_percent / 100).toString() + ',000'
  );
  // Persian Numbers

  return (
    <>
      <li
        className={classNames(
          'flex flex-col border border-gray-3',
          foodItemClassName
        )}
      >
        <div className="w-[14rem] md:w-[25rem]">
          <Image
            className="object-cover mb-4"
            src={image}
            alt={name}
            width={500}
            height={100}
            priority
          />
        </div>

        <div className="bg-white">
          <div className="p-2">
            <h3 className="text-center text-xl md:text-2xl md:font-semibold mb-4">
              {name}
            </h3>
            <div className="flex items-center justify-between w-full md:gap-x-10 md:mb-4">
              <div className="flex items-center">
                <span className="w-[15px] h-[15px] fill-gray-5">
                  <HeartIcon />
                </span>
                <span className="hidden md:block text-xs whitespace-nowrap md:text-lg mr-2">
                  افزودن به علاقمندی‌ها
                </span>
              </div>
              <div className="space-x-2">
                <span className="text-md rounded-2xl px-2 text-error font-semibold bg-error-Extralight md:text-lg">
                  %{persianDiscount}
                </span>
                <span className="line-through text-gray-5 md:text-lg">
                  {persianOriginalPrice}
                </span>
              </div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="flex items-center">
                <div className="fill-warning-Light w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                  <StarIcon />
                </div>
                <div className="md:text-xl mt-1 flex gap-x-1">
                  <span>{persianScore}</span>
                  <span className="hidden md:inline-block text-gray-5 text-md">
                    ({persianAllScores} <span className="mr-1">امتیاز</span>)
                  </span>
                </div>
              </div>
              <div className="flex gap-x-1 md:text-xl">
                <span>{persianFinalPrice}</span>
                <span>تومان</span>
              </div>
            </div>
            <div className="flex justify-center items-center pb-2">
              <Button className="p-2 md:p-4 md:text-xl">
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default FoodItem;

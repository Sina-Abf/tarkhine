import { Button } from '@/app/components/common/button';
import Stars from '@/app/components/common/stars';
import persianNumber from '@/helpers/persian-number';
import { HeartIcon } from '@/public/icons';
import { TMenuFoods } from '@/utils/get-menu-foods';
import classNames from 'classnames';
import Image from 'next/image';

const MenuFoodsItem = ({
  discount_percent,
  food_items,
  food_name,
  image,
  price,
  stars,
  isLoading,
}: TMenuFoods) => {
  const afterDiscountPrice =
    discount_percent && persianNumber(+price - +discount_percent);
  return (
    <li className="flex rounded-lg border max-w-screen-xl border-gray-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div>
        {/* Mobile Image */}
        <Image
          className="md:hidden h-full object-cover"
          src={image}
          alt={food_name}
          width={100}
          height={100}
        />
        {/* Desktop Image */}
        <Image
          className="hidden md:block h-full object-cover"
          src={image}
          alt={food_name}
          width={250}
          height={250}
        />
      </div>
      <div className="p-4 w-full md:px-8 md:py-6">
        <div className="mb-1 flex justify-between items-center md:mb-8">
          <h2 className="font-semibold md:text-3xl">{food_name}</h2>
          {/* Mobile */}
          <div className="space-x-2 flex items-center md:hidden">
            {discount_percent && (
              <span className="text-error bg-error-Extralight rounded-lg p-0.5 md:text-2xl">
                %{persianNumber(discount_percent)}
              </span>
            )}
            <span
              className={classNames(
                'line-through text-gray-5 md:text-2xl',
                !discount_percent && 'hidden'
              )}
            >
              {persianNumber(price)}
              {persianNumber(',000')}
            </span>
          </div>
          {/* Mobile */}
          <div className="fill-gray-7 w-[16px] h-[16px] md:w-[24px] md:h-[24px] hidden md:block">
            <HeartIcon />
          </div>
        </div>

        <div className="mb-2 flex justify-between items-center">
          <p className="md:text-xl">{food_items?.join(',')}...</p>
          {/* Desktop */}
          <div className="space-x-2 items-center hidden md:flex">
            {discount_percent && (
              <span className="text-error bg-error-Extralight rounded-lg p-1 md:text-2xl ml-2">
                %{persianNumber(discount_percent)}
              </span>
            )}
            <span
              className={classNames(
                'line-through text-gray-5 md:text-2xl',
                !discount_percent && 'hidden'
              )}
            >
              {persianNumber(price)}
              {persianNumber(',000')}
            </span>
          </div>
          {/* mobile */}
          {discount_percent && (
            <div className="md:text-2xl md:hidden">
              {persianNumber(afterDiscountPrice)}
              <span>{persianNumber(',000')}</span>
              <span className="mr-1">تومان</span>
            </div>
          )}
        </div>
        {/* desktop */}
        <div className="text-end mb-4 hidden md:block">
          <div className="md:text-2xl">
            {discount_percent
              ? persianNumber(afterDiscountPrice)
              : persianNumber(price)}
            <span>{persianNumber(',000')}</span>
            <span className="mr-1">تومان</span>
          </div>
        </div>
        <div className="flex justify-between items-center md:gap-x-14">
          <div className="fill-gray-7 w-[16px] h-[16px] md:hidden">
            <HeartIcon />
          </div>
          <Stars className="md:max-w-[120px]" rating={+stars} />
          <Button className="p-2 text-md md:w-[200px] md:text-xl md:py-4">
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </li>
  );
};
export default MenuFoodsItem;

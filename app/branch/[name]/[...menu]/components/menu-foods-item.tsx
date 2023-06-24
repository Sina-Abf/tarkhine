import { Button } from '@/app/components/common/button';
import Stars from '@/app/components/common/stars';
import persianNumber from '@/helpers/persian-number';
import PersianNumber from '@/helpers/persian-number';
import { HeartIcon } from '@/public/icons';
import { TMenuFoods } from '@/utils/get-menu-foods';
import Image from 'next/image';

const MenuFoodsItem = ({
  all_scores,
  discount_percent,
  food_items,
  food_name,
  image,
  price,
  stars,
  id,
}: TMenuFoods) => {
  const afterDiscountPrice = persianNumber(+price - +discount_percent);
  return (
    <li className="flex rounded-lg border max-w-screen-xl border-gray-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="bg-red-400">
        <Image
          className="md:hidden h-full object-cover"
          src={image}
          alt={food_name}
          width={100}
          height={100}
        />
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
          <div className="space-x-2 flex items-center md:hidden">
            <span className="text-error bg-error-Extralight rounded-lg p-0.5 md:text-2xl">
              %{persianNumber(discount_percent)}
            </span>
            <span className="line-through text-gray-5 md:text-2xl">
              {persianNumber(price)}
              {persianNumber(',000')}
            </span>
          </div>
          <div className="fill-gray-7 w-[16px] h-[16px] md:w-[24px] md:h-[24px] hidden md:block">
            <HeartIcon />
          </div>
        </div>

        <div className="mb-2 flex justify-between items-center">
          <p className="md:text-xl">{food_items.slice(3).join(',')}...</p>
          <div className="space-x-2 items-center hidden md:flex">
            <span className="text-error bg-error-Extralight rounded-lg p-0.5 md:text-2xl">
              %{persianNumber(discount_percent)}
            </span>
            <span className="line-through text-gray-5 md:text-2xl">
              {persianNumber(price)}
              {persianNumber(',000')}
            </span>
          </div>
          {/* mobile */}
          <div className="md:text-2xl md:hidden">
            {afterDiscountPrice}
            <span>{persianNumber(',000')}</span>
            <span className="mr-1">تومان</span>
          </div>
        </div>
        {/* md+ */}
        <div className="text-end mb-4 hidden md:block">
          <div className="md:text-2xl">
            {afterDiscountPrice}
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

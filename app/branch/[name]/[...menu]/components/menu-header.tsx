'use client';
import classNames from 'classnames';
import Link from 'next/link';
import FoodTags from './food-tags';
import { FOOD_TAGS } from '@/constants';

const MenuHeader = ({ activeParam }: { activeParam: string }) => {
  return (
    <header>
      <ul className="bg-gray-3 text-gray-7 flex text-xl md:text-2xl gap-x-4 md:gap-x-8 p-8 mb-4">
        <li>
          <Link
            className={classNames(
              activeParam === 'main-food' &&
                'text-primary underline underline-offset-8'
            )}
            href=""
          >
            غذای اصلی
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              activeParam === 'before-food' &&
                'text-primary underline underline-offset-8'
            )}
            href=""
          >
            پیش غذا
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              activeParam === 'dessert' &&
                'text-primary underline underline-offset-8'
            )}
            href=""
          >
            دسر
          </Link>
        </li>
        <li>
          <Link
            className={classNames(
              activeParam === 'drink' &&
                'text-primary underline underline-offset-8'
            )}
            href=""
          >
            نوشیدنی
          </Link>
        </li>
      </ul>
      <FoodTags data={FOOD_TAGS} />
    </header>
  );
};
export default MenuHeader;

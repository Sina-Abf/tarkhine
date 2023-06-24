import { Button } from '@/app/components/common/button';
import Stars from '@/app/components/common/stars';
import persianNumber from '@/helpers/persian-number';
import { HeartIcon } from '@/public/icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MenuFoodsItemSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <li className="flex rounded-lg border max-w-screen-xl border-gray-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="">
        <div className="md:hidden">
          <Skeleton
            className="h-full object-cover"
            width={100}
            height={100}
            duration={1}
          />
        </div>
        <div className="hidden md:block">
          <Skeleton
            className="h-full object-cover"
            width={160}
            height={160}
            duration={1}
          />
        </div>

        {/* <Image
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
        /> */}
      </div>
      <div className="p-4 w-full md:px-8 md:py-6">
        <div className="mb-1 flex justify-between items-center md:mb-8">
          <Skeleton
            className="h-full object-cover"
            width={100}
            height={20}
            duration={1}
          />
          <div className="space-x-4 flex items-center md:hidden">
            <Skeleton
              className="h-full object-cover "
              width={30}
              height={15}
              duration={1}
            />
            <Skeleton
              className="h-full object-cover mr-2"
              width={30}
              height={15}
              duration={1}
            />
          </div>
          <div className="fill-gray-7 w-[16px] h-[16px] md:w-[24px] md:h-[24px] hidden md:block">
            <Skeleton
              className="h-full object-cover"
              width={20}
              height={15}
              duration={1}
            />
          </div>
        </div>

        <div className="mb-2 flex justify-between items-center">
          <Skeleton
            className="h-full object-cover ml-4"
            width={90}
            height={10}
            duration={1}
          />
          <div className="space-x-2 items-center hidden md:flex">
            <Skeleton
              className="h-full object-cover ml-4"
              width={40}
              height={15}
              duration={1}
            />
            <Skeleton
              className="h-full object-cover"
              width={40}
              height={15}
              duration={1}
            />
          </div>
          {/* mobile */}
          <div className="md:text-2xl md:hidden">
            <Skeleton
              className="h-full object-cover ml-4"
              width={70}
              height={10}
              duration={1}
            />
            <span className="mr-1"></span>
          </div>
        </div>
        {/* md+ */}
        <div className="text-end mb-4 hidden md:block">
          <div className="md:text-2xl">
            <Skeleton
              className="h-full object-cover ml-4"
              width={70}
              height={10}
              duration={1}
            />
          </div>
        </div>
        <div className="flex justify-between items-center md:gap-x-14">
          <div className="fill-gray-7 w-[16px] h-[16px] md:hidden">
            <Skeleton
              className="h-full object-cover"
              width={20}
              height={15}
              duration={1}
            />
          </div>
          <Skeleton
            className="h-full object-cover"
            width={80}
            height={15}
            duration={1}
          />
          <div className="hidden md:block">
            <Skeleton
              className="h-full object-cover ml-4"
              width={180}
              height={30}
              duration={1}
            />
          </div>
          <div className="md:hidden">
            <Skeleton
              className="h-full object-cover ml-4"
              width={60}
              height={15}
              duration={1}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
export default MenuFoodsItemSkeleton;

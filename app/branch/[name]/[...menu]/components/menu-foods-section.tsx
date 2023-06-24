'use client';
import { Button } from '@/app/components/common/button';
import { CartIcon } from '@/public/icons';
import getMenuFoods from '@/utils/get-menu-foods';
import MenuFoodsItem from './menu-foods-item';
import MenuFoodsItemSkeleton from './menu-foods-item-skeleton';

const FoodsSection = ({
  sectionTitle,
  url,
  index,
}: {
  sectionTitle: string;
  url: string;
  index: number;
}) => {
  const { data, isLoading } = getMenuFoods(url);
  const loadingData = new Array(data?.length ?? 20).fill(null);

  return (
    <section className="max-w-2xl md:max-w-screen-xl mx-auto px-4 pb-4">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="font-bold text-3xl">{sectionTitle}</h2>
        {index === 0 && (
          <Button
            variant="transparent"
            className="border-primary flex text-primary items-center p-2"
          >
            <div className="w-[18px] h-[18px] fill-primary">
              <CartIcon />
            </div>
            <span className="ml-2">اطلاعات بیشتر</span>
          </Button>
        )}
      </div>
      <ul className="max-w-2xl md:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {isLoading
          ? loadingData.map((_, index) => (
              <MenuFoodsItemSkeleton isLoading={isLoading} />
            ))
          : data?.map((food) => (
              <MenuFoodsItem {...food} isLoading={isLoading} />
            ))}
      </ul>
    </section>
  );
};
export default FoodsSection;

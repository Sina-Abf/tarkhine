import Slider from '@/app/components/slider';
import Search from '@/app/components/common/search';
import FoodRow from './components/food-row';
import { Button } from '@/app/components/common/button';
import { MenuIcon } from '@/public/icons';
import BranchDetails from './components/branch-details';
import detailsPic from '../../../public/images/branches/Ekbatan-2.png';
import CommentsSlider from './components/comments-slider';
import { FOOD_ROW_DATA, SLIDER_DATA, BRANCH_COMMENTS } from '@/constants';

const BranchName = () => {
  return (
    <section className="">
      <Slider items={SLIDER_DATA} />
      <Search hidden />
      {FOOD_ROW_DATA.map((food, i) => (
        <FoodRow key={i} {...food} />
      ))}
      <div className="w-full flex justify-center">
        <Button
          variant="transparent"
          className="flex items-center border-2 border-primary py-2 px-4 hover:bg-primary group"
        >
          <span className="fill-primary w-[20px] h-[20px] group-hover:fill-white">
            <MenuIcon />
          </span>
          <span className="text-primary font-medium text-2xl group-hover:text-white">
            مشاهده منوی کامل
          </span>
        </Button>
      </div>
      <BranchDetails image={detailsPic} />
      <div>
        <h2 className="text-center font-bold text-3xl mt-10 pb-8">
          نظرات کاربران
        </h2>
        <CommentsSlider items={BRANCH_COMMENTS} />
      </div>
    </section>
  );
};
export default BranchName;

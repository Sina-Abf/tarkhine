import Slider from '@/app/components/slider';
import Search from '@/app/components/common/search';
import FoodRow from './components/food-row';
import BranchDetails from './components/branch-details';
import detailsPic from '../../../public/images/branches/Ekbatan-2.png';
import CommentsSlider from './components/comments-slider';
import { FOOD_ROW_DATA, SLIDER_DATA, BRANCH_COMMENTS } from '@/constants';
import MenuButton from './components/menu-button';

const BranchName = () => {
  return (
    <section className="">
      <Slider items={SLIDER_DATA} />
      <Search hidden />
      {FOOD_ROW_DATA.map((food, i) => (
        <FoodRow key={i} {...food} />
      ))}
      <MenuButton />
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

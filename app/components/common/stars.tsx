import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { StarIcon } from '@/public/icons';
import type { ItemStyles } from '@smastrom/react-rating';
import classNames from 'classnames';

const starStyles: ItemStyles = {
  itemShapes: <StarIcon />,
  activeFillColor: '#F4B740',
  inactiveFillColor: 'transparent',
  inactiveStrokeColor: '#F4B740',
};

const Stars = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  return (
    <Rating
      className={classNames('max-w-[70px]', className)}
      readOnly
      spaceBetween="none"
      spaceInside="none"
      value={rating}
      itemStyles={starStyles}
    />
  );
};
export default Stars;

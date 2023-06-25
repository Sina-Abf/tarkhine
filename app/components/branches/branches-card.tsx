import { LeftArrowIcon } from '@/public/icons';
import { Button } from '../common/button';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface TBranch {
  address: string;
  branch_name: string;
  image: string;
  dontShowButton?: boolean;
  className?: string;
  href: string;
}

const BranchesCard = ({
  address,
  branch_name,
  image,
  dontShowButton,
  className,
  href,
}: TBranch) => {
  return (
    <li
      className={classNames(
        'hover:shadow-xl cursor-pointer text-center transition-all duration-300 hover:scale-95 max-w-2xl w-full mx-auto overflow-hidden flex md:flex-col border-2 border-gray-4 rounded-lg group',
        className
      )}
    >
      <Link href={href}>
        <div className="flex-1">
          <Image
            className="md:w-full h-full object-cover"
            width={200}
            height={200}
            src={image}
            alt={branch_name}
          />
        </div>
        <div className="p-4 flex-1">
          <h2 className="text-2xl  mb-4">{branch_name}</h2>
          <p className="">{address}</p>
          <div
            className={classNames(
              'mt-10 flex justify-center items-center',
              dontShowButton && 'hidden'
            )}
          >
            <Button
              variant="transparent"
              className="flex transition-all duration-300 opacity-0 group-hover:opacity-100 items-center hover:border-shade-2 border-2 border-primary px-8 py-2 font-semibold"
            >
              <span className="ml-2 text-primary hover:text-shade-2">
                صفحه شعبه
              </span>
              <span className="w-[18px] h-[18px] fill-primary hover:fill-shade-2">
                <LeftArrowIcon />
              </span>
            </Button>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default BranchesCard;

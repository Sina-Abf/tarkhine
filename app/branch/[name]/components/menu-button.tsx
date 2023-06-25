'use client';
import { Button } from '@/app/components/common/button';
import { MenuIcon } from '@/public/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuButton = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center">
      <Link href={`${pathname}/menu`}>
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
      </Link>
    </div>
  );
};
export default MenuButton;

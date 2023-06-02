import Image from 'next/image';
import pic from '../../../../public/images/mobile-sidebar/mobile-siderbar-image.png';
import logo from '../../../../public/images/logo/logo-white.png';
import {
  AboutusIcon,
  BranchIcon,
  CallIcon,
  CloseIcon,
  HomeIcon,
  LeftArrowIcon,
  MenuIcon,
} from '@/public/icons';
import { Dispatch, SetStateAction, memo } from 'react';
import ActiveLink from '@/helpers/active-link';

const DATA = [
  {
    icon: <HomeIcon />,
    name: 'صفحه اصلی',
    children: [],
    route: '/',
    id: 1,
  },
  {
    icon: <MenuIcon />,
    name: 'منو',
    children: [{}],
    route: '#',
    id: 2,
  },
  {
    icon: <BranchIcon />,
    name: 'شعبه',
    children: [{}],
    route: '#',
    id: 3,
  },
  {
    icon: <AboutusIcon />,
    name: 'درباره ما',
    children: [],
    route: '#',
    id: 4,
  },
  {
    icon: <CallIcon />,
    name: 'تماس با ما',
    children: [],
    route: '#',
    id: 5,
  },
];

const MobileSiderbar = ({
  setMobileSiderbarShow,
}: {
  setMobileSiderbarShow: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        onClick={() => setMobileSiderbarShow(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-10 md:hidden"
        aria-hidden="true"
      />

      <ul className="fixed right-0 bottom-0 top-0 w-2/3 bg-white z-10 md:hidden">
        <div className="relative mb-4">
          <Image className="w-full" src={pic} alt="mobile-sidebar-image" />
          <Image
            className=" absolute top-1/3 right-[20px]"
            src={logo}
            alt="mobile-sidebar-logo"
          />
          <button
            onClick={() => setMobileSiderbarShow(false)}
            className="absolute top-[15px] left-[20px] fill-white text-white w-[25px] h-[25px]"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 space-y-5 divide-y-2">
          {DATA.map((item) => {
            return (
              <li key={item.id} className="md:text-2xl py-2">
                <ActiveLink
                  className="flex items-center gap-4"
                  href={item.route}
                >
                  <span className="w-[20px] h-[20px] fill-black">
                    {item.icon}
                  </span>
                  <span className="text-2xl flex gap-x-1 items-center justify-between w-full">
                    {item.name}
                    {item.children.length ? (
                      <span className="w-[20px] h-[20px] ml-4 fill-gray-7 -rotate-90">
                        <LeftArrowIcon />
                      </span>
                    ) : null}
                  </span>
                </ActiveLink>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};
export default MobileSiderbar;

import Image from 'next/image';
import pic from '../../../../public/images/mobile-sidebar/mobile-siderbar-image.png';
import logo from '../../../../public/images/logo/logo-white.png';
import {
  AboutusIcon,
  BranchIcon,
  CallIcon,
  CloseIcon,
  HomeIcon,
  MenuIcon,
} from '@/public/icons';
import { Dispatch, SetStateAction } from 'react';
import MobileSiderbarItem from './mobile-sidebar-item';

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
    children: [
      {
        title: 'غذای اصلی',
        route: '/menu/main-food',
      },
      {
        title: 'پیش غذا',
        route: '/menu/before-food',
      },
      {
        title: 'دسر',
        route: '/menu/dessert',
      },
      {
        title: 'نوشیدنی',
        route: '/menu/drink',
      },
    ],
    id: 2,
  },
  {
    icon: <BranchIcon />,
    name: 'شعبه',
    children: [
      {
        title: 'اکباتان',
        route: '/branch/ekbatan',
      },
      {
        title: 'ونک',
        route: '/branch/vanak',
      },
      {
        title: 'اقدسیه',
        route: '/branch/aghdasieh',
      },
      {
        title: 'چالوس',
        route: '/branch/chaloos',
      },
    ],
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
              <MobileSiderbarItem
                icon={item.icon}
                name={item.name}
                route={item.route}
                children={item.children}
                key={item.id}
              />
            );
          })}
        </div>
      </ul>
    </>
  );
};
export default MobileSiderbar;

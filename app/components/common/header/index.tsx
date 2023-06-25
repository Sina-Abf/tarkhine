'use client';
import Image from 'next/image';
import Logo from '@/public/images/logo/green-small-logo.png';
import {
  CartIcon,
  HamburgerIcon,
  LeftArrowIcon,
  SearchIcon,
  UserIcon,
} from '@/public/icons';
import ActiveLink from '@/helpers/active-link';
import { Button } from '../button';
import { useMemo, useState } from 'react';
import Modal from '../modal';
import Search from '../search';
import MobileSiderbar from './mobile-sidebar';
import DropdownMenu from '../dropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModalStoreActions } from '@/store/use-modal-store';
const Header = () => {
  const pathname = usePathname();
  // this is for having active link on children
  const branchName =
    pathname === '/branch/ekbatan'
      ? 'اکباتان'
      : pathname === '/branch/chaloos'
      ? 'چالوس'
      : pathname === '/branch/aghdasieh'
      ? 'اقدسیه'
      : pathname === '/branch/vanak'
      ? 'ونک'
      : 'شعبه';

  const DATA = [
    {
      name: 'صفحه اصلی',
      children: [],
      route: '/',
      id: '1',
    },
    {
      name: branchName,
      children: [
        {
          name: 'اکباتان',
          href: '/branch/ekbatan',
        },
        {
          name: 'چالوس',
          href: '/branch/chaloos',
        },
        {
          name: 'اقدسیه',
          href: '/branch/aghdasieh',
        },
        {
          name: 'ونک',
          href: '/branch/vanak',
        },
      ],
      route: '#',
      id: '2',
    },
    {
      name: 'منو',
      children: [
        {
          name: 'غذای اصلی',
          href: '/main-food',
        },
        {
          name: 'پیش غذا',
          href: '/before-food',
        },
        {
          name: 'دسر',
          href: '/dessert',
        },
        {
          name: 'نوشیدنی',
          href: '/drink',
        },
      ],
      route: '#',
      id: '3',
    },
    {
      name: 'اعطای نمایندگی',
      children: [],
      route: '#',
      id: '4',
    },
    {
      name: 'درباره ما',
      children: [],
      route: '#',
      id: '5',
    },
    {
      name: 'تماس با ما',
      children: [],
      route: '#',
      id: '6',
    },
  ];

  const { toggleSearchModalVisible } = useModalStoreActions();
  const [mobileSidebarShow, setMobileSiderbarShow] = useState(false);
  return (
    <header className="">
      <nav>
        {mobileSidebarShow && (
          <MobileSiderbar setMobileSiderbarShow={setMobileSiderbarShow} />
        )}
        <ul className="p-8 flex justify-between items-center">
          <li className="md:hidden fill-primary">
            <button onClick={() => setMobileSiderbarShow(true)}>
              <HamburgerIcon />
            </button>
          </li>
          <li>
            <Link href="/">
              <Image priority src={Logo} alt="Logo" />
            </Link>
          </li>
          <div className="hidden md:flex justify-center gap-x-4">
            {DATA.map((item, index) => {
              if (item.children.length)
                return (
                  <DropdownMenu
                    key={item.id}
                    buttonTitle={item.name}
                    menuItems={item.children}
                  />
                );

              return (
                <li key={item.id} className="md:text-2xl ">
                  <ActiveLink
                    className="flex gap-x-1 items-center"
                    href={item.route}
                  >
                    {item.name}
                    {item.children.length ? (
                      <span className="w-[12px] h-[12px] mt-1 fill-gray-7 -rotate-90">
                        <LeftArrowIcon />
                      </span>
                    ) : null}
                  </ActiveLink>
                </li>
              );
            })}
          </div>
          <li className="flex gap-x-4">
            <Button
              variant="secondary"
              className="p-2 fill-primary hover:fill-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:p-3 hidden md:block"
              onClick={() => toggleSearchModalVisible(true)}
            >
              <SearchIcon />
            </Button>
            <Button
              variant="secondary"
              className="p-2 fill-primary hover:fill-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:p-3"
            >
              <CartIcon />
            </Button>
            <Button
              variant="secondary"
              className="p-2 fill-primary hover:fill-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:p-3"
            >
              <UserIcon />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

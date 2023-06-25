'use client';
import { LeftArrowIcon } from '@/public/icons';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modal from './modal';
import { BRANCH_CARDS } from '@/constants';
import BranchesCard from '../branches/branches-card';
import { useModalStoreActions } from '@/store/use-modal-store';

interface TDropdown {
  buttonTitle: string;
  menuItems: {
    name: string;
    href: string;
  }[];
}

function DropdownMenu({ buttonTitle, menuItems }: TDropdown) {
  const pathname = usePathname();

  const branchNameIncludes = pathname
    .split('/')
    .some(
      (branch) =>
        branch === 'vanak' ||
        branch === 'ekbatan' ||
        branch === 'aghdasieh' ||
        branch === 'chaloos'
    );

  const { toggleBranchModalVisible } = useModalStoreActions();

  return (
    <div className="">
      <Menu>
        <Menu.Button className="flex items-center text-2xl text-center w-full">
          {buttonTitle}
          <span className="w-[12px] h-[12px] mt-1 fill-gray-7 -rotate-90">
            <LeftArrowIcon />
          </span>
        </Menu.Button>

        <Menu.Items className="absolute overflow-hidden mt-4 divide-y flex flex-col bg-white shadow-inner rounded-xl z-50">
          {menuItems.map((item) =>
            !branchNameIncludes && !item.href.includes('/branch') ? (
              <Menu.Item key={item.name}>
                <div
                  className="cursor-pointer hover:bg-gray-3 py-3 transition-colors duration-300 text-xl p-2 pr-4 w-[12rem]"
                  onClick={() => toggleBranchModalVisible(true)}
                >
                  {item.name}
                </div>
              </Menu.Item>
            ) : (
              <Menu.Item key={item.name}>
                <Link
                  className="hover:bg-gray-3 py-3 transition-colors duration-300 text-xl p-2 pr-4 w-[12rem]"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </Menu.Item>
            )
          )}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default DropdownMenu;

import { LeftArrowIcon } from '@/public/icons';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

interface TDropdown {
  buttonTitle: string;
  menuItems: {
    name: string;
    href: string;
  }[];
}

function DropdownMenu({ buttonTitle, menuItems }: TDropdown) {
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
          {menuItems.map((item) => {
            return (
              <Menu.Item key={item.name}>
                <Link
                  className="hover:bg-gray-3 py-3 transition-colors duration-300 text-xl p-2 pr-4 w-[12rem]"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default DropdownMenu;

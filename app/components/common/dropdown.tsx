import { Menu } from '@headlessui/react';
import Link from 'next/link';

interface TDropdown {
  buttonTitle: string;
  itemName: string;
  href: string;
}

function DropdownMenu({ buttonTitle, itemName, href }: TDropdown) {
  return (
    <Menu>
      <Menu.Button className="text-2xl">{buttonTitle}</Menu.Button>
      <Menu.Items className="mt-4 divide-y flex flex-col bg-white shadow-md rounded-xl ">
        <Menu.Item>
          <Link href={href}>{itemName}</Link>
        </Menu.Item>
        <Menu.Item>
          <a className="text-xl p-2 w-[10rem]" href="/account-settings">
            اکباتان
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="text-xl p-2 w-[10rem]" href="/account-settings">
            اکباتان
          </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default DropdownMenu;

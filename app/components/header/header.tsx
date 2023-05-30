'use client';
import Image from 'next/image';
import Logo from '@/public/images/green-small-logo.png';
import { CartIcon, HamburgerIcon, UserIcon } from '@/public/icons';
import data from '@/public/fake-db/header.json';
import ActiveLink from '@/helpers/active-link';
const Header = () => {
  return (
    <header className="">
      <nav>
        <ul className="p-8 flex justify-between items-center">
          <li className="md:hidden fill-primary">
            <HamburgerIcon />
          </li>
          <li>
            <Image src={Logo} alt="Logo" />
          </li>
          <li className="hidden md:flex gap-x-4 md:text-2xl">
            {data.map((item) => {
              return (
                <ActiveLink key={item.id} href={item.route}>
                  {item.name}
                </ActiveLink>
              );
            })}
          </li>
          <li className="flex gap-x-2">
            <button className="bg-tint-1 fill-primary p-4 rounded-sm hover:bg-primary hover:fill-white">
              <CartIcon />
            </button>
            <button className="bg-tint-1 fill-primary p-4 rounded-sm hover:bg-primary hover:fill-white">
              <UserIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

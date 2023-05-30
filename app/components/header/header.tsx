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
          <div className="hidden md:flex justify-center gap-x-4">
            {data.map((item) => {
              return (
                <li className="md:text-2xl">
                  <ActiveLink key={item.id} href={item.route}>
                    {item.name}
                  </ActiveLink>
                </li>
              );
            })}
          </div>
          <li className="flex gap-x-2">
            <button className="bg-tint-1 fill-primary p-4 rounded-lg hover:bg-primary hover:fill-white w-[40px] h-[40px] md:w-[45px] md:h-[45px] transition-colors duration-300">
              <CartIcon />
            </button>
            <button className="bg-tint-1 fill-primary p-4 rounded-lg hover:bg-primary hover:fill-white w-[40px] h-[40px] md:w-[45px] md:h-[45px] transition-colors duration-300">
              <UserIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

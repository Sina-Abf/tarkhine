'use client';
import Image from 'next/image';
import Logo from '@/public/images/logo/green-small-logo.png';
import { CartIcon, HamburgerIcon, SearchIcon, UserIcon } from '@/public/icons';
import data from '@/public/fake-db/header.json';
import ActiveLink from '@/helpers/active-link';
import { Button } from '../button';
import { useState } from 'react';
import Modal from '../modal';
import Search from '../search';
const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <header className="">
      {modalShow && (
        <Modal
          title="جستجو"
          content={<Search />}
          description="لطفا متن خود را تایپ و سپس دکمه Enter را بزنید."
          isOpen={modalShow}
          setIsOpen={setModalShow}
        />
      )}
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
                <li key={item.id} className="md:text-2xl">
                  <ActiveLink href={item.route}>{item.name}</ActiveLink>
                </li>
              );
            })}
          </div>
          <li className="flex gap-x-4">
            <Button
              variant="secondary"
              className="p-2 fill-primary hover:fill-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] md:p-3 hidden md:block"
              onClick={() => setModalShow((prev) => !prev)}
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

'use client';
import { InstagramIcon, TelegramIcon, TwitterIcon } from '@/public/icons';
import { ChangeEvent, useState } from 'react';
// @ts-ignore
import NumberToPersianWord from 'number_to_persian_word';
import Input from './input';

const Footer = () => {
  const [wordCount, setWordCount] = useState('۰');
  const changeEventHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWordCount(
      NumberToPersianWord.convertEnToPe(e.target.value.trim().length)
    );
  };
  return (
    <footer className="footer-image pb-20">
      <div className="text-white flex justify-around p-8">
        <div className="flex-1">
          <h2 className="text-xl mb-4 md:text-2xl">دسترسی آسان</h2>
          <ul className="p-2 space-y-2 md:space-y-4 md:text-2xl">
            <li>پرسش‌های متداول</li>
            <li>قوانین ترخینه</li>
            <li>حریم خصوصی</li>
            <li className="flex gap-x-2">
              <span>
                <TelegramIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-xl mb-4 md:text-2xl">شعبه‌های ترخینه</h2>
          <ul className="p-2 space-y-2 md:space-y-4 md:text-2xl">
            <li>شعبه اکباتان</li>
            <li>شعبه چالوس</li>
            <li>شعبه اقدسیه</li>
            <li>شعبه ونک</li>
          </ul>
        </div>
        <form className="flex-1 hidden md:block md:ml-14">
          <h2 className="text-xl mb-4 md:text-2xl">پیام به ترخینه</h2>
          <div className="flex gap-4">
            <div className="relative flex flex-col gap-4 w-full">
              <Input placeholder="نام و نام خانوادگی" />
              <Input placeholder="شماره تماس" />
              <Input placeholder="آدرس ایمیل (اختیاری)" />
            </div>
            <div className="">
              <textarea
                maxLength={200}
                onChange={changeEventHandler}
                className="focus:border-none focus:outline-none focus:placeholder:font-semibold focus:outline-primary focus:ring-0 focus:placeholder:text-primary hover:border-white transition-all duration-300 min-w-[20rem] min-h-[10rem] md:min-h-[13rem] border border-gray-7 md:p-4 bg-transparent placeholder:text-gray-1 rounded-lg"
                placeholder="پیام شما"
              />
              <div className="text-gray-4 text-end w-full">{wordCount}/۲۰۰</div>
            </div>
          </div>
        </form>
      </div>
    </footer>
  );
};
export default Footer;

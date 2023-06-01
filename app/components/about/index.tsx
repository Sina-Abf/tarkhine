'use client';
import Image from 'next/image';
import bgMobile from '../../../public/images/about/about-image-mobile.png';
import bgDesktop from '../../../public/images/about/about-image-desktop.png';
import { Button } from '../common/button';
import {
  ComfortablePlaceIcon,
  LeftArrowIcon,
  MenuIcon,
  QualityIcon,
  UserIcon,
} from '@/public/icons';
import useMediaQuery from '@/hooks/use-media-query';

const DATA = [
  {
    icon: <UserIcon />,
    name: 'پرسنلی مجرب و حرفه ای',
    id: 1,
  },
  {
    icon: <QualityIcon />,
    name: 'کیفیت بالای غذاها',
    id: 2,
  },
  {
    icon: <ComfortablePlaceIcon />,
    name: 'محیطی دلنشین و آرام',
    id: 3,
  },
  {
    icon: <MenuIcon />,
    name: 'منوی متنوع',
    id: 4,
  },
];

const About = () => {
  const isBigScreen = useMediaQuery('(min-width: 800px)');
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
  return (
    <div className="relative w-full font-thin">
      {isSmallScreen && (
        <Image width={800} height={800} src={bgMobile} alt="about-bg" />
      )}
      {isBigScreen && (
        <Image width={1700} height={1700} src={bgDesktop} alt="about-bg" />
      )}
      <div className="p-8 absolute top-0 text-white flex flex-col items-center w-full h-full justify-around aboutSectionSize:flex-row">
        <div>
          <h2 className="text-3xl mb-2 aboutSectionSize:text-4xl">
            رستوران های زنجیره ای ترخینه
          </h2>
          <p className="text-lg leading-8 opacity-80 mb-4 text-justify max-w-xl aboutSectionSize:text-2xl">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="w-full flex justify-end items-center">
            <Button
              variant="transparent"
              className="flex justify-between items-center fill-white px-4 py-2 mb-4"
            >
              <span className="ml-2">اطلاعات بیشتر</span>
              <div className="w-[18px] h-[18px]">
                <LeftArrowIcon />
              </div>
            </Button>
          </div>
          {/* Small Size IconSet */}
          <ul className=" grid grid-cols-2 place-items-center h-1/2 md:mt-14 aboutSectionSize:hidden">
            {DATA.map(({ icon, name, id }) => (
              <li key={id} className="flex flex-col items-center h-fit">
                <span className="w-[25px] h-[25px] fill-white">{icon}</span>
                <h5>{name}</h5>
              </li>
            ))}
          </ul>
        </div>
        {/* Big Size Icon Set */}
        <ul className="hidden  grid-cols-2  place-items-center h-1/2 md:mt-14 aboutSectionSize:grid">
          {DATA.map(({ icon, name, id }) => (
            <li key={id} className="flex flex-col items-center h-fit">
              <span className="w-[25px] h-[25px] aboutSectionSize:w-[40px] aboutSectionSize:h-[40px] fill-white aboutSectionSize:mb-4">
                {icon}
              </span>
              <h5 className="aboutSectionSize:text-2xl">{name}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default About;

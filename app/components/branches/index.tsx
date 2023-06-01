import ekbatan from '../../../public/images/branches/Ekbatan.png';
import vanak from '../../../public/images/branches/Vanak.png';
import aghdasieh from '../../../public/images/branches/Aghdasieh.png';
import chaloos from '../../../public/images/branches/Chaloos.png';
import Image from 'next/image';
import { Button } from '../common/button';
import { LeftArrowIcon } from '@/public/icons';

const DATA = [
  {
    branch_name: 'شعبه اکباتان',
    address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
    image: ekbatan,
    id: 1,
  },
  {
    branch_name: 'شعبه چالوس',
    address:
      'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
    image: chaloos,
    id: 2,
  },
  {
    branch_name: 'شعبه اقدسیه',
    address: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
    image: aghdasieh,
    id: 3,
  },
  {
    branch_name: 'شعبه ونک',
    address: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
    image: vanak,
    id: 4,
  },
];

const Branches = () => {
  return (
    <div className="mt-10 p-10">
      <div className="text-center">
        <h2 className="mb-24 font-bold text-5xl">ترخینه گردی</h2>
        <ul className="gap-4 w-full grid grid-cols-1 md:grid-cols-4">
          {DATA.map(({ address, branch_name, image, id }) => (
            <li
              key={id}
              className="hover:shadow-xl transition-all duration-300 hover:scale-95 max-w-2xl w-full mx-auto overflow-hidden flex md:flex-col border-2 border-gray-4 rounded-lg group"
            >
              <div className="">
                <Image
                  className="md:w-full h-full"
                  width={150}
                  src={image}
                  alt={branch_name}
                />
              </div>
              <div className="p-4 flex-1">
                <h2 className="text-2xl font-semibold mb-4">{branch_name}</h2>
                <p className="font-semibold">{address}</p>
                <div className="mt-10 flex justify-center items-center">
                  <Button
                    variant="transparent"
                    className="flex transition-all duration-300 opacity-0 group-hover:opacity-100 items-center hover:border-shade-2 border-2 border-primary px-8 py-2 font-semibold"
                  >
                    <span className="ml-2 text-primary hover:text-shade-2">
                      صفحه شعبه
                    </span>
                    <span className="w-[18px] h-[18px] fill-primary hover:fill-shade-2">
                      <LeftArrowIcon />
                    </span>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Branches;

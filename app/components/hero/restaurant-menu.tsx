import pishGhaza from '../../../public/images/menu/pish-ghaza.png';
import ghazayeAsli from '../../../public/images/menu/ghazaye-asli.png';
import drink from '../../../public/images/menu/drink.png';
import dessert from '../../../public/images/menu/dessert.png';
import Image from 'next/image';
import { Button } from '../common/button';

const DATA = [
  {
    image: pishGhaza,
    name: 'پیش غذا',
    id: 1,
  },
  {
    image: ghazayeAsli,
    name: 'غذای اصلی',
    id: 2,
  },
  {
    image: drink,
    name: 'نوشیدنی',
    id: 3,
  },
  {
    image: dessert,
    name: 'دسر',
    id: 4,
  },
];

const RestaurantMenu = () => {
  return (
    <div className="mt-10 p-10 text-center">
      <h2 className="mb-24 font-bold text-3xl">منوی رستوران</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl md:max-w-full place-items-center gap-8 md:gap-0">
        {DATA.map(({ image, name, id }) => (
          <li
            key={id}
            className="shadow-xl flex flex-col justify-center items-center border-2 rounded-xl border-primary p-2 md:w-[18rem] md:h-[10rem] lg:w-[25rem] mb-20"
          >
            <Image
              width={150}
              height={150}
              className="-mt-[50%]"
              src={image}
              alt={name}
            />
            <Button
              className="md:w-[10rem] md:h-[4rem] w-[8rem] h-[4rem] translate-y-[50%] md:translate-y-[90%]"
              variant="primary"
              size="medium"
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

import { ClockIcon, LocationIcon, PhoneIcon } from '@/public/icons';
import Image, { StaticImageData } from 'next/image';

const BranchDetails = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="mt-10">
      <div className="object-contain w-full">
        <Image
          className="object-contain w-full"
          priority
          src={image}
          alt="branch details pic"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-white p-4 -translate-y-4 w-fit rounded-lg border border-primary md:flex gap-8">
          {/* Location */}
          <div className="flex items-center mb-2">
            <span className="fill-black w-[18px] h-[18px] ml-2">
              <LocationIcon />
            </span>
            <h2 className="md:text-2xl">
              شهرک اکباتان، فاز ۳، <br className="hidden md:block" /> مجتمع
              تجاری کوروش، طبقه سوم
            </h2>
          </div>
          <div className="flex justify-between gap-8">
            {/* Number */}
            <div className="flex justify-between items-center">
              <div className="flex md:flex-col items-center">
                <span className="fill-black w-[18px] h-[18px] ml-2">
                  <PhoneIcon />
                </span>
                <div className="flex md:flex-col items-center md:text-2xl">
                  <span className="">۳۳۵۳۵۳۵۴</span>
                  <span>۳۳۵۳۵۳۵۶</span>
                </div>
              </div>
            </div>
            {/* Time */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="fill-black w-[18px] h-[18px] ml-2">
                  <ClockIcon />
                </span>
                <span className="md:text-2xl">همه‌روزه از ساعت ۱۲ الی ۲۳ </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BranchDetails;

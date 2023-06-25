'use client';

import ActiveLink from '@/helpers/active-link';
import { LeftArrowIcon } from '@/public/icons';
import { useModalStoreActions } from '@/store/use-modal-store';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MobileSiderbarItem = ({
  route,
  icon,
  name,
  child,
}: {
  route?: string;
  icon: React.ReactNode;
  name: string;
  child?: { title: string; route: string }[];
}) => {
  const [childShow, setChildShow] = useState(false);
  const pathname = usePathname();
  const branchNameIncludes = pathname
    .split('/')
    .some(
      (branch) =>
        branch === 'vanak' ||
        branch === 'ekbatan' ||
        branch === 'aghdasieh' ||
        branch === 'chaloos'
    );

  const { toggleBranchModalVisible } = useModalStoreActions();

  return (
    <li className="md:text-2xl py-2">
      {!route ? (
        <div
          onClick={() => setChildShow((prev) => !prev)}
          className="flex items-center gap-4"
        >
          <span className="w-[20px] h-[20px] fill-black">{icon}</span>
          <span className="text-2xl flex gap-x-1 items-center justify-between w-full">
            {name}
            {child?.length ? (
              <>
                <span
                  className={classNames(
                    'w-[20px] h-[20px] ml-4 fill-gray-7 -rotate-90',
                    childShow && 'rotate-90'
                  )}
                >
                  <LeftArrowIcon />
                </span>
              </>
            ) : null}
          </span>
        </div>
      ) : (
        <ActiveLink
          onClick={() => setChildShow((prev) => !prev)}
          className="flex items-center gap-4"
          href={route}
        >
          <span className="w-[20px] h-[20px] fill-black">{icon}</span>
          <span className="text-2xl flex gap-x-1 items-center justify-between w-full">
            {name}
            {child?.length ? (
              <>
                <span
                  className={classNames(
                    'w-[20px] h-[20px] ml-4 fill-gray-7 -rotate-90',
                    childShow && 'rotate-90'
                  )}
                >
                  <LeftArrowIcon />
                </span>
              </>
            ) : null}
          </span>
        </ActiveLink>
      )}
      <div className="divide-y-2">
        {childShow &&
          child?.map((item) =>
            !branchNameIncludes && !item.route.includes('/branch') ? (
              <div
                key={item.title}
                className="cursor-pointer hover:bg-gray-3 py-3 transition-colors duration-300 text-xl p-2 pr-4 w-[12rem]"
                onClick={() => toggleBranchModalVisible(true)}
              >
                {item.title}
              </div>
            ) : (
              <ActiveLink
                href={`/branch/${pathname.split('/')[2]}${item.route}`}
                className="flex flex-col p-2 text-xl mx-8 py-4"
                key={item.title}
              >
                {item.title}
              </ActiveLink>
            )
          )}
      </div>
    </li>
  );
};
export default MobileSiderbarItem;

'use client';

import { BRANCH_CARDS } from '@/constants';
import Modal from './modal';
import BranchesCard from '../branches/branches-card';
import {
  useBranchModalVisible,
  useModalStoreActions,
  useSearchModalVisible,
} from '@/store/use-modal-store';
import Search from './search';

const AllModals = () => {
  const branchModalVisible = useBranchModalVisible();
  const searchModalVisible = useSearchModalVisible();
  const { toggleBranchModalVisible, toggleSearchModalVisible } =
    useModalStoreActions();
  return (
    <>
      {/* Branch Modal */}
      <Modal
        isModalVisible={branchModalVisible}
        toggleModalVisible={toggleBranchModalVisible}
        contentClassName="flex flex-col gap-y-4 p-8 md:flex-row gap-x-8"
        modalClassName="w-[90%] sm:w-fit"
        description="برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:"
        title="انتخاب شعبه"
      >
        {BRANCH_CARDS.map((card) => (
          <BranchesCard
            address={card.address}
            branch_name={card.branch_name}
            image={card.image}
            href={card.href}
            key={card.id}
            dontShowButton={true}
            className="h-[10rem] md:h-full"
          />
        ))}
      </Modal>
      {/* Branch Modal */}

      {/* Search Modal */}
      <Modal
        isModalVisible={searchModalVisible}
        toggleModalVisible={toggleSearchModalVisible}
        className="hidden md:block"
        title="جستجو"
        description="لطفا متن خود را تایپ و سپس دکمه Enter را بزنید."
      >
        <Search />
      </Modal>
      {/* Search Modal */}
    </>
  );
};
export default AllModals;

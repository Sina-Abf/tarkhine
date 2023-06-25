import { BRANCH_CARDS } from '@/constants';
import BranchesCard from './branches-card';

const Branches = () => {
  return (
    <div className="mt-10 p-10">
      <div className="text-center">
        <h2 className="mb-24 font-bold text-5xl">ترخینه گردی</h2>
        <ul className="gap-4 w-full grid grid-cols-1 md:grid-cols-4">
          {BRANCH_CARDS.map(({ address, branch_name, image, href, id }) => (
            <BranchesCard
              key={id}
              address={address}
              branch_name={branch_name}
              image={image}
              href={href}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Branches;

import Search from '@/app/components/common/search';

const FoodTags = ({ data }: { data: { name: string }[] }) => {
  return (
    <div className="max-w-screen-2xl mx-auto mb-4 flex flex-col md:flex-row md:items-center">
      <div className="flex gap-x-8 overflow-hidden overflow-x-scroll no-scrollbar px-4">
        {data.map((tag) => {
          return (
            <div
              key={tag.name}
              className="bg-gray-3 text-gray-8 w-full rounded-2xl text-center whitespace-nowrap p-2 font-semibold text-lg"
            >
              {tag.name}
            </div>
          );
        })}
      </div>
      <div className="flex-1">
        <Search />
      </div>
    </div>
  );
};
export default FoodTags;

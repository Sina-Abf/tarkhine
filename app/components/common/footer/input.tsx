const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <>
      <input
        className="focus:border-primary focus:placeholder:font-semibold ease-in-out ring-0 outline-none focus:outline-none focus:ring-0 focus:placeholder:text-primary relative border border-gray-7 md:p-4 bg-transparent placeholder:text-gray-1 rounded-lg hover:border-white transition-all duration-300"
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};
export default Input;

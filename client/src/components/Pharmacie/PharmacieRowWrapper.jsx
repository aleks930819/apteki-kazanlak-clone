const PharmacieRowWrapper = ({ children }) => {
  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center gap-5 sm:mb-0 lg:grid lg:grid-cols-3 ">
      {children}
    </div>
  );
};

export default PharmacieRowWrapper;

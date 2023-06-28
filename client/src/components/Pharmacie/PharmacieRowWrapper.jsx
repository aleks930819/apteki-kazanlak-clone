const PharmacieRowWrapper = ({ children }) => {
  return (
    <div className="mb-10 flex w-full flex-col items-start justify-start gap-6 sm:mb-0 sm:items-center sm:justify-start lg:grid lg:grid-cols-3 ">
      {children}
    </div>
  );
};

export default PharmacieRowWrapper;

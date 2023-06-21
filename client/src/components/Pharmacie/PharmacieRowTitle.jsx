const PharmacieRowTitle = ({ title }) => {
    return (
      <div className="flex flex-col items-start justify-start gap-5 sm:flex-row sm:items-center sm:gap-x-12 h-full">
        <h3 className="text-2xl text-grey-dark sm:text-3xl">{title}:</h3>
      </div>
    );
  };
  
  export default PharmacieRowTitle;
  
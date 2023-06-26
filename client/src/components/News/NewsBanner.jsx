const NewsBanner = ({ image }) => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center ">
        <img
          src={image}
          alt="People Banner Logo"
          className="h-[60vh]
           w-full object-cover
          "
        />
      </div>
    </div>
  );
};

export default NewsBanner;

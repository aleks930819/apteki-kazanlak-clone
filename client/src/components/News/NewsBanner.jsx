import People from '../../assets/vitamins.jpg';

const NewsBanner = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center ">
        <img
          src={People}
          alt="People Banner Logo"
          className="h-[70vh]
           w-full object-cover
              object-top
          "
        />
      </div>
    </div>
  );
};

export default NewsBanner;

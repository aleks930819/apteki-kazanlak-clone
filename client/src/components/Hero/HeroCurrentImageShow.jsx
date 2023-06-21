const HeroCurrentImageShow = ({ currentImage }) => {
  return (
    <div className="absolute bottom-3 left-0 flex w-full justify-center gap-2">
      <div
        className={`h-[5px] w-6 rounded-md 
       ${currentImage === 0 ? 'bg-primary' : 'bg-grey-main'}`}
      ></div>
      <div
        className={`h-[5px] w-6 rounded-md 
       ${currentImage === 1 ? 'bg-primary' : 'bg-grey-main'}`}
      ></div>
      <div
        className={`h-[5px] w-6 rounded-md 
       ${currentImage === 2 ? 'bg-primary' : 'bg-grey-main'}`}
      ></div>
    </div>
  );
};

export default HeroCurrentImageShow;

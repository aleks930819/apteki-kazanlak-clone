import People from '../../assets/people.jpg';

const PharmacieBanner = () => {
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
      <span
        className="
        absolute
        bottom-[5%]
        left-[35%]
        -translate-x-1/2
        -translate-y-1/2
        transform
        bg-primary
        bg-opacity-90 
         p-2
         text-6xl text-white
        "
      >
        Фарма 1 Казанлък
      </span>
    </div>
  );
};

export default PharmacieBanner;

import People from '../../assets/people.jpg';

const PharmacieBanner = ({ name }) => {
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
    animate-pop-in
    absolute
    bottom-24
    left-60
    transform
    bg-primary
    bg-opacity-90
    p-2
    text-6xl
    text-white
  "
      >
        {name}
      </span>
    </div>
  );
};

export default PharmacieBanner;

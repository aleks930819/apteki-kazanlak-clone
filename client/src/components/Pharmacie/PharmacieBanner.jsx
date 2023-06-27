import People from '../../assets/people.jpg';

const PharmacieBanner = ({ name, mainImage }) => {
  return (
    <div className="relative">
      <figure className="flex flex-col items-center justify-center ">
        <img
          src={mainImage || People}
          alt="People Banner Logo"
          className="h-[65vh]
             w-full object-cover
                object-top
            "
        />
      </figure>
      <span
        className="
    animate-pop-in
    absolute
    bottom-12
    left-60
    transform
    bg-primary
    bg-opacity-90
    p-2
    text-5xl
    text-white
  "
      >
        {name}
      </span>
    </div>
  );
};

export default PharmacieBanner;

import Man from '../../assets/man.jpg';

const PharmacieHero = ({
  managerName,
  managerTitle,
  managerDescription,
  managerImage,
}) => {
  return (
    <header className="linear-background-purple py-[30px] sm:py-[80px]">
      <div className="mx-auto flex w-[90vw]  flex-col-reverse items-center justify-center gap-10 sm:max-w-lg sm:flex-row">
        <div className="font-montserrat flex-1  text-white">
          <h2 className="text-4xl">{managerName}</h2>
          <br />
          <p className="text-lg font-semibold">{managerTitle.toLowerCase()}</p>
          <br />
          <p className="whitespace-pre-wrap ">{managerDescription}</p>
        </div>
        <div className="flex flex-1 items-center">
          <figure className="h-full w-full">
            <img
              src={managerImage || Man}
              alt="manager"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default PharmacieHero;

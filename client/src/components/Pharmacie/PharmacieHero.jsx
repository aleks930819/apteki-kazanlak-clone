import Man from '../../assets/man.jpg';

const PharmacieHero = ({ managerName, managerTitle, managerDescription }) => {
  return (
    <div className="linear-background-purple py-[30px] sm:py-[80px]">
      <div className="mx-auto flex w-[90vw]  flex-col-reverse items-center justify-center gap-10 sm:w-[75vw] sm:flex-row">
        <div className="flex-1 text-white  font-montserrat">
          <h2 className="text-4xl">{managerName}</h2>
          <br />
          <p className="text-lg font-semibold">{managerTitle.toLowerCase()}</p>
          <br />
          <p  className="whitespace-pre-wrap ">{managerDescription}</p>
        </div>
        <div className="flex flex-1 items-center">
          <div className="h-full w-full">
            <img src={Man} alt="man" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacieHero;

import Man from '../../assets/man.jpg';

const PharmacieHero = ({
  managerName,
  managerTitle,
  managerDescription,
  managerImage,
}) => {
  return (
    <header className="linear-background-purple px-[30px] py-[25px] sm:py-[50px]">
      <div className="mx-auto flex flex-col-reverse items-center justify-center   sm:max-w-lg sm:flex-row">
        <div className=" mb-auto   flex-1 px-[15px] pb-[30px] text-white">
          <h2 className=" pt-[20px] text-3xl sm:pt-0 sm:text-4xl">
            {managerName}
          </h2>
          <p className="pt-[16px]  text-lg font-semibold">
            {managerTitle.toLowerCase()}
          </p>
          <br />
          <p
            className="whitespace-pre-wrap text-base tracking-tighter sm:text-lg
           
          "
          >
            {managerDescription}
          </p>
        </div>
        <div className="mb-auto flex flex-1 items-center">
          <img
            src={managerImage || Man}
            alt="manager"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default PharmacieHero;

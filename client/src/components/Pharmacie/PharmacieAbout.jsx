import Woman from '../../assets/woman.jpg';

const PharmacieAbout = ({ history, secondaryImage }) => {
  return (
    <section
      className=" mx-auto ml-auto mr-auto flex max-w-lg flex-col items-center   bg-white px-6 py-6  sm:flex-row  
sm:px-0 sm:py-[35px]"
    >
      <div className="mr-[20px]">
        <img
          src={secondaryImage || Woman}
          alt="woman"
          className=" w-full object-cover"
        />
      </div>
      <div className=" mb-[20px] mt-[20px] max-w-prose px-2 sm:mb-0 sm:mt-0 sm:pr-10">
        <p className="whitespace-pre-wrap">{history}</p>
      </div>
    </section>
  );
};

export default PharmacieAbout;

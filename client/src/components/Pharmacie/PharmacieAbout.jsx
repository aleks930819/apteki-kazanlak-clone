import Woman from '../../assets/woman.jpg';

const PharmacieAbout = ({ history, secondaryImage }) => {
  return (
    <section
      className=" mx-auto ml-auto mr-auto flex max-w-lg flex-col items-center  gap-10 bg-white px-6 py-12  
sm:flex-row sm:px-0"
    >
      <div>
        <img
          src={secondaryImage || Woman}
          alt="woman"
          className=" w-full object-cover sm:h-[35vh]"
        />
      </div>
      <div className="max-w-prose pr-10">
        <p className="whitespace-pre-wrap">{history}</p>
      </div>
    </section>
  );
};

export default PharmacieAbout;

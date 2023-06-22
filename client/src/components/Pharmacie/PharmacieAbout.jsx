import Woman from '../../assets/woman.jpg';

const PharmacieAbout = ({ history }) => {
  return (
    <section
      className=" mx-auto flex w-full flex-col items-center justify-center gap-10 bg-white px-6 py-8 sm:w-[70vw] 
sm:flex-row sm:px-0"
    >
      <div>
        <img
          src={Woman}
          alt="woman"
          className=" w-full object-cover sm:h-[35vh]"
        />
      </div>
      <div className="pr-10">{history}</div>
    </section>
  );
};

export default PharmacieAbout;

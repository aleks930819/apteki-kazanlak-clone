import Woman from '../../assets/woman.jpg';

const PharmacieAbout = () => {
  return (
    <section
      className=" mx-auto flex w-full flex-col items-center justify-center gap-10 bg-white px-6 py-8 sm:w-[70vw] 
sm:flex-row sm:px-0
    "
    >
      <div>
        <img
          src={Woman}
          alt="woman"
          className=" w-full object-cover sm:h-[35vh]"
        />
      </div>
      <div className="pr-10">
        <p>Социална аптека Фарма 1 Казанлък е открита през 1997г.</p>
        <br />
        <p>
          В момента в нея работи екип от 8 човека. Намира се в пешеходната част
          на града.
        </p>
        <br />
        <p>
          В аптеката може да се закупят специализирани ортопедрични
          приспособления и консумативи.
        </p>
      </div>
    </section>
  );
};

export default PharmacieAbout;

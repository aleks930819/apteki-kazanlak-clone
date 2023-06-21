import Man from '../../assets/man.jpg';

const PharmacieHero = () => {
  return (
    <div className="linear-background-purple py-[80px]">
      <div className="mx-auto flex w-[90vw]  flex-col-reverse items-center justify-center gap-10 sm:w-[70vw] sm:flex-row">
        <div className="flex-1 text-white">
          <h2 className="text-4xl">Иван Гитев</h2>
          <br />
          <p className="text-lg font-semibold">магистър-фармацевт</p>
          <br />
          <p className="text-lg">
            Завършва магистратура в МУ-София през 2010 г. като отличник на
            випуска. Започва работа веднага след това в аптека Фарма 1 Казанлък.
            През 2012 г. става управител на същата аптека. В студентските си
            години е председател на Българска Фармацевтична Студентска Асоциация
            (БФСА). Към днешна дата е член на управителния съвет на Български
            Фармацевтичен Съюз (БФС) – втори пореден мандат. Продължава
            образованието си като специализант по фармакология и фармакотерапия
            в МУ-Варна.
          </p>
          <br />
          <p className="text-lg">
            “Фармацевтът е най-достъпният здравен специалист. По последни данни
            от проведено проучване е с най-голямо доверие от страна на пациента.
            Именно това мотивира мен и моят екип да полагаме фармацевтични грижи
            – с работа и съвети да бъдем в помощ на нашите пациенти. Да бъдем
            все по-добри, отдадени на професията си и в полза на здравето на
            гражданите на община Казанлък.“
          </p>
        </div>
        <div className="flex-1">
          <div className="h-full w-full">
            <img src={Man} alt="man" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacieHero;

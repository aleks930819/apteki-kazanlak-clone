// import Woman from '../../assets/working-woman.jpg';
import PharmacieRow1 from './PharmacieRow1';
import PharmacieRow2 from './PharmacieRow2';
import PharmacieRow3 from './PharmacieRow3';

const PharmacieWorking = () => {
  return (
    <section className="bg-grey-main p-5 sm:p-10 ">
      <div
        className="mx-auto flex  flex-col items-center justify-center   sm:w-[75vw] xl:w-[70vw]
      "
      >
        {/* 1 */}
        <PharmacieRow1 />
        {/* 2 */}
        <PharmacieRow2 />
        {/* 3 */}
        <PharmacieRow3 />
      </div>
    </section>
  );
};

export default PharmacieWorking;

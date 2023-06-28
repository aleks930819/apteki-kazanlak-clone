// import Woman from '../../assets/working-woman.jpg';
import PharmacieRow1 from './PharmacieRow1';
import PharmacieRow2 from './PharmacieRow2';
import PharmacieRow3 from './PharmacieRow3';

const PharmacieWorking = ({
  workingHours,
  phone,
  pharmacieImages,
  workingWith,
}) => {
  return (
    <section className="bg-grey-main py-10 ">
      <div
        className="mx-auto ml-auto mr-auto flex  w-full max-w-lg flex-col items-center  justify-center px-5 lg:px-10  
      "
      >
        {/* 1 */}
        <PharmacieRow1
          image={pharmacieImages[0]?.url}
          workingWith={workingWith}
        />
        {/* 2 */}
        <PharmacieRow2
          workingHours={workingHours}
          image={pharmacieImages[1]?.url}
        />
        {/* 3 */}
        <PharmacieRow3 phone={phone} image={pharmacieImages[2]?.url} />
      </div>
    </section>
  );
};

export default PharmacieWorking;

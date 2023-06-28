import PharmaciesLogo from '../../assets/contacts-banner.jpg';

const ContactBanner = () => {
  return (
    <section className="relative h-[20vh] overflow-hidden bg-grey-lighter py-20 sm:h-[305px] sm:py-32">
      <div className="mx-auto flex items-center max-w-lg"> {/* Updated: Added "items-center" class */}
        <div className="w-full">
          <h3 className="pl-4 text-2xl text-blue-dark lg:text-5xl flex items-center h-full"> {/* Updated: Added "flex" and "items-center" classes */}
            Нашите Аптеки
          </h3>
          <img
            src={PharmaciesLogo}
            alt="Pharmacies"
            className="absolute right-0 top-0 h-auto min-h-full w-[40vw] lg:h-[35vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;

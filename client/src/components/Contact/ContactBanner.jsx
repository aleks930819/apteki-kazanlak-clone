import PharmaciesLogo from '../../assets/contacts-banner.jpg';

const ContactBanner = () => {
  return (
    <section className="flex h-[45vh] w-full items-center bg-grey-lighter text-center">
      <h3 className="flex-1 text-5xl text-blue-dark mr-6">Нашите Аптеки</h3>
      <div className="">
        <img
          src={PharmaciesLogo}
          alt="Pharmacies Logo"
          className="h-[45vh]
                w-full
                object-center"
        />
      </div>
    </section>
  );
};

export default ContactBanner;

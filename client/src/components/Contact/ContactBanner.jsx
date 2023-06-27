import PharmaciesLogo from '../../assets/contacts-banner.jpg';

const ContactBanner = () => {
  return (
    <section className="flex h-[20vh]  w-full items-center bg-grey-lighter text-center lg:h-[38vh]">
      <h3 className="mr-6 flex-1 text-2xl text-blue-dark lg:text-5xl">
        Нашите Аптеки
      </h3>
      <figure>
        <img
          src={PharmaciesLogo}
          alt="Pharmacies Logo"
          className="mx-auto
                h-[20vh]
                w-[40vw]
                object-center
                lg:h-[38vh]
                lg:w-full 
                "
        />
      </figure>
    </section>
  );
};

export default ContactBanner;

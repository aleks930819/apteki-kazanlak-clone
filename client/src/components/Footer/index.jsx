import FooterContacts from './FooterContacts';
import FooterCopyRight from './FooterCopyRight';
import FooterNomenclature from './FooterNomenclature';
import FooterPharmacies from './FooterPharmacies';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <footer className="mt-auto flex  w-full  flex-col items-center justify-between gap-10 bg-primary  text-white">
      <div className="mt-10 grid grid-cols-1 w-full  sm:grid-cols-4 sm:max-w-lg ml-auto mr-auto  gap-2 p-2  sm:gap-12 ">
        <FooterInfo />
        <FooterPharmacies />
        <FooterNomenclature />
        <FooterContacts />
      </div>
      <FooterCopyRight />
    </footer>
  );
};

export default Footer;

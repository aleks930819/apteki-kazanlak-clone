import FooterContacts from './FooterContacts';
import FooterCopyRight from './FooterCopyRight';
import FooterNomenclature from './FooterNomenclature';
import FooterPharmacies from './FooterPharmacies';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <footer className="mt-auto flex  w-full  flex-col items-center justify-between gap-10 bg-primary  text-white">
      <div className="ml-auto  mr-auto mt-10 grid w-full  grid-cols-1 gap-2 pl-[10px] sm:max-w-lg  sm:grid-cols-4   sm:gap-12 ">
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

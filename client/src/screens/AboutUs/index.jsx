import AboutUsBanner from '../../components/AboutUs/AboutUsBanner';

import AboutUsInnerImage from '../../assets/about-us-inner.jpg';
import ServiceHighlightsItems from '../../components/ServiceHighlights/ServiceHighlightsItems';
import AboutUsPharmacyServices from '../../components/AboutUs/AboutUsPharmacyServices';

const ServiceHighlightsTitles = [
  {
    title: 'Качествено обслужване',
  },
  {
    title: 'Професионализъм',
  },
  {
    title: 'Достъпни цени',
  },
  {
    title: 'Силно мотивиран екип',
  },
];

const AboutUsScreen = () => {
  return (
    <div className=" bg-grey-lighter-2">
      <AboutUsBanner />
      <section
        className="
      container mx-auto
      mb-12
      mt-12
      w-[50vw]
      "
      >
        <p>
          Социални Аптеки Казанлък е най-старата частна верига аптеки в града.
          Отваряйки врати през далечната <strong>1991г</strong>., първата частна
          аптека дава началото на това, което днес наричаме съвременна фармация.
          Вече повече от четвърт век ние сме близо до нашите пациенти. Грижим се
          за тяхното здраве, помагаме им в лечението на хроничните заболявания,
          винаги се стараем да намерим заедно правилното лечение.
        </p>
        <br />
        <p>
          Днес Социални Аптеки Казанлък е най-голямата верига аптеки в града.
          Познаваме голяма част от пациентите си и се стараем да оправдаваме
          ежедневно тяхното доверие. Усъвършенстваме знанията си, разширяваме
          екипа си, искаме да сме достъпни за консултация. Ние знаем, че
          здравето е най-ценното нещо в живота ни, затова винаги залагаме на:
        </p>
        <br />
        <div className="flex items-center justify-center ">
          <div className='mr-auto'>
            <img
              src={AboutUsInnerImage}
              alt="About Us Inner Image"
              className="h-[35vh]
            w-full
            object-cover"
            />
          </div>

          <div className="p-10">
            <ServiceHighlightsItems
              ServiceHighlightsTitles={ServiceHighlightsTitles}
            />
          </div>
        </div>
        <br />
        <p>
          Фармацевтът е най-достъният медицински специалист. През всичките тези
          години ние се научихме не просто да бъдем добри медицински
          специалисти, а вашите лични фармацевти – хората, на които можете
          спокойно да доверите здравето си!
        </p>
        <br />
        <p>В аптеките ни можете да откриете:</p>
        <br />
        <AboutUsPharmacyServices />
      </section>
    </div>
  );
};

export default AboutUsScreen;

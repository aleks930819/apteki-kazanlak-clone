import AboutUsBanner from '../../components/AboutUs/AboutUsBanner';

import AboutUsInnerImage from '../../assets/about-us-inner.jpg';
import ServiceHighlightsItems from '../../components/ServiceHighlights/ServiceHighlightsItems';
import AboutUsPharmacyServices from '../../components/AboutUs/AboutUsPharmacyServices';

import { AiOutlineCheck } from 'react-icons/ai';

const ServiceHighlightsTitles = [
  {
    title: 'Качествено обслужване',
    fontSize: 'text-base',
  },
  {
    title: 'Професионализъм',
    fontSize: 'text-base',
  },
  {
    title: 'Достъпни цени',
    fontSize: 'text-base',
  },
  {
    title: 'Силно мотивиран екип',
    fontSize: 'text-base',
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
      lg:w-[54vw]
      xl:w-[45vw]
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
        <div className="flex flex-col items-center justify-center sm:flex-row ">
          <div className="mr-auto">
            <img
              src={AboutUsInnerImage}
              alt="About Us Inner Image"
              className="h-full
              w-full
            object-cover
            sm:h-[250px]"
            />
          </div>

          <ul className="mr-auto mt-4  flex flex-col  gap-2 p-6 text-primary sm:mb-auto sm:mt-0">
            {ServiceHighlightsTitles?.map((item) => (
              <li
                className="flex items-center justify-start text-base font-semibold leading-9 text-primary"
                key={item.title}
              >
                <AiOutlineCheck className="mr-3 inline-block text-2xl" />
                {item.title}
              </li>
            ))}
          </ul>
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

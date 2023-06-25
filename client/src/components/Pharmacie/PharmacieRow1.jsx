import PharmacieRowWrapper from './PharmacieRowWrapper';
import PharmacieRowTitle from './PharmacieRowTitle';
import PharmacieRowImage from './PharmacieRowImage';

import { AiOutlineCheck } from 'react-icons/ai';

const PharmacieRow1 = ({ image, workingWith }) => {
  return (
    <PharmacieRowWrapper>
      <PharmacieRowTitle title="Ние работим с" />
      <div>
        <ul className="flex flex-col gap-4 text-primary ">
          {workingWith?.map((item) => (
            <li
              className="flex items-center text-base font-semibold leading-9 text-primary"
              key={item}
            >
              <AiOutlineCheck className="mr-3 inline-block text-2xl" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <PharmacieRowImage rounded={true} image={image} />
    </PharmacieRowWrapper>
  );
};

export default PharmacieRow1;

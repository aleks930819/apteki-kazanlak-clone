import { AiOutlineCheck } from 'react-icons/ai';

const ServiceHighlightsItem = ({ title, fontSize }) => {
  const itemClassName = `flex items-center text-base font-semibold leading-9 text-primary  ${fontSize}`;

  return (
    <li className={itemClassName}>
      <AiOutlineCheck className="mr-3 inline-block text-3xl" />
      {title}
    </li>
  );
};

export default ServiceHighlightsItem;

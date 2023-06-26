import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';

const AddTableButton = ({ title, path }) => {
  return (
    <div className="mt-10 mb-10 lg:mb-0 lg:mt-0 flex items-center justify-center">
      <Link
        to={path}
        className="flex items-center rounded-md bg-primary p-4
         text-white shadow-md 
        "
      >
        {title} <AiFillPlusCircle className="ml-2 text-2xl" />
      </Link>
    </div>
  );
};

export default AddTableButton;

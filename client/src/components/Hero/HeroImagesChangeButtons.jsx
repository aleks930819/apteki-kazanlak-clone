import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';



const HeroImagesChangeButtons = ({handleNextImage,handlePrevImage}) => {
  return (
    <div
      className="absolute 
  bottom-0
  left-[15%]
  inline-flex
  items-center gap-2 bg-primary px-2 py-2 text-white"
    >
      <button>
        <BsArrowLeft size={30} onClick={handlePrevImage} />
      </button>
      <span>/</span>
      <button>
        <BsArrowRight size={30} onClick={handleNextImage} />
      </button>
    </div>
  );
};

export default HeroImagesChangeButtons;

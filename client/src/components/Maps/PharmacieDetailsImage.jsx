const PharmacieDetailsImage = ({ pharmacie }) => {
  return (
    <div className="h-[30%]">
      <img
        src={pharmacie.imageUrl}
        alt="logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default PharmacieDetailsImage;

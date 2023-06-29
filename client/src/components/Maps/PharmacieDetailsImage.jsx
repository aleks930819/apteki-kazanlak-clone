const PharmacieDetailsImage = ({ pharmacie }) => {
  return (
    <div className="h-[200px]">
      <img
        src={pharmacie?.frontImage.url}
        alt="logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default PharmacieDetailsImage;

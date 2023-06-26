const PharmacieInfo = ({ data }) => {
  return (
    <div className="mt-12 flex h-full flex-col">
      <div className="h-[30%]">
        <img
          src={data.imageUrl}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 p-5">
        <h2 className="text-2xl font-bold text-blue-dark">Адрес</h2>
        <p>{data.city}</p>
        <p>{data.street}</p>
        <p>{data.phone}</p>
      </div>
    </div>
  );
};

export default PharmacieInfo;

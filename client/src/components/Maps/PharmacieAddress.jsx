const PharmacieAddress = ({ pharmacie }) => {
  return (
    <div className="h-full p-5">
      <h2 className="text-2xl font-semibold text-blue-dark">Адрес</h2>
      <p>{pharmacie?.address.city}</p>
      <p>{pharmacie?.address.street}</p>
      <p>{pharmacie?.phone}</p>
    </div>
  );
};

export default PharmacieAddress;

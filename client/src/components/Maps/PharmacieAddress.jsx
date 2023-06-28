const PharmacieAddress = ({ pharmacie }) => {
  return (
    <div className="flex-1 p-5">
      <h2 className="text-2xl font-semibold text-blue-dark">Адрес</h2>
      <p>{pharmacie.city}</p>
      <p>{pharmacie.street}</p>
      <p>{pharmacie.phone}</p>
    </div>
  );
};

export default PharmacieAddress;

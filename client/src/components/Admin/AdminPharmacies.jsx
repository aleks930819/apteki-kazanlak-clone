import { useLoaderData } from 'react-router-dom';
import { getPharmacies } from '../../services/apiPharmacies';
import Table from '../../ui/Table';
import { BsPencilSquare } from 'react-icons/bs';

const tableColumns = [
  { label: 'Име на Аптеката', dataKey: 'pharmacieName' },
  { label: 'Адрес', dataKey: 'address' },
  { label: 'Телефон', dataKey: 'phone' },
  { label: 'Мениджър', dataKey: 'manager' },
  {
    label: 'Редактирай',
    dataKey: 'edit',
    render: (rowData) => (
      <div className="flex items-center">
        <BsPencilSquare className="cursor-pointer text-2xl" />
        <span className="ml-2">{rowData.edit}</span>
      </div>
    ),
  },
];

const AdminPharmacies = () => {
  const pharmacies = useLoaderData();

  const tableData = [
    ...pharmacies.map((pharmacie) => ({
      pharmacieName: pharmacie.name,
      address: `${pharmacie.address.city}, ${pharmacie.address.street}`,
      phone: pharmacie.phone,
      manager: pharmacie.managerName,
    })),
  ];

  return <Table columns={tableColumns} data={tableData}></Table>;
};

export const loader = async () => {
  const pharmacies = getPharmacies();
  return pharmacies;
};

export default AdminPharmacies;

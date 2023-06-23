import { Link, useLoaderData } from 'react-router-dom';
import { getPharmacies } from '../../services/apiPharmacies';
import Table from '../../ui/Table';
import { BsPencilSquare } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

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
        <BsPencilSquare className="cursor-pointer text-2xl text-primary" />
        <span className="ml-2">{rowData.edit}</span>
      </div>
    ),
  },
  {
    label: 'Добави Аптека',
    dataKey: 'add',
    render: (rowData) => (
      <Link to='/add' className="flex cursor-pointer items-center">
        <AiFillPlusCircle className="text-2xl text-primary" />
        <span className="ml-2">{rowData.add}</span>
      </Link>
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

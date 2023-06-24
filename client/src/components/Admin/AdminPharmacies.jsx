import { Link } from 'react-router-dom';

import { getPharmacies } from '../../services/apiPharmacies';

import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';

import { BsPencilSquare } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';

const tableColumns = [
  { label: 'Име на Аптеката', dataKey: 'pharmacieName' },
  { label: 'Адрес', dataKey: 'address' },
  { label: 'Телефон', dataKey: 'phone' },
  { label: 'Мениджър', dataKey: 'manager' },
  {
    label: 'Редактирай',
    dataKey: 'edit',
    render: (rowData) => (
      <Link
        to={`/admin/pharmacies/edit/${rowData.slug}`}
        className="flex cursor-pointer items-center"
      >
        <BsPencilSquare className="cursor-pointer text-2xl text-primary" />
        <span className="ml-2">{rowData.edit}</span>
      </Link>
    ),
  },
];

const AdminPharmacies = () => {
  const { isLoading, data: pharmacies } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });
  let tableData = [];

  if (isLoading) {
    return <Spinner />;
  }

  if (pharmacies) {
    tableData = [
      ...pharmacies.map((pharmacie) => ({
        _id: pharmacie._id,
        pharmacieName: pharmacie.name,
        address: `${pharmacie.address.city}, ${pharmacie.address.street}`,
        phone: pharmacie.phone,
        manager: pharmacie.managerName,
        slug: pharmacie.slug,
      })),
    ];
  }

  return (
    <Table
      columns={tableColumns}
      data={tableData}
      addButtonTitle="Добави Аптека"
      to="/admin/pharmacies/add"
    ></Table>
  );
};

export default AdminPharmacies;

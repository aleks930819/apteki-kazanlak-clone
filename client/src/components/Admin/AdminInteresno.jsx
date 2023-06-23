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
        <BsPencilSquare className="text-2xl" />
        <span className="ml-2">{rowData.edit}</span>
      </div>
    ),
  },
];

const tableData = [
  {
    pharmacieName: 'ХИГИЯ',
    address: 'гр. Казанлък, ул. Христо Ботев 1',
    phone: '0431 6 22 22',
    manager: 'Христина Иванова - Теодосиев',
  },
];

const AdminInteresno = () => {
  return <Table columns={tableColumns} data={tableData}></Table>;
};

export default AdminInteresno;

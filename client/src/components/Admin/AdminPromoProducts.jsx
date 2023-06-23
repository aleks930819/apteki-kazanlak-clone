import Table from '../../ui/Table';
import { BsPencilSquare } from 'react-icons/bs';

const tableColumns = [
  { label: 'Име на продукта', dataKey: 'productName' },
  { label: 'Количество', dataKey: 'quantity' },
  { label: 'Стара цена', dataKey: 'oldPrice' },
  { label: 'Нова цена', dataKey: 'newPrice' },
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
    productName: '-7% Линекс комплекс капсули х 14',
    quantity: 10,
    oldPrice: 20.99,
    newPrice: 40.99,
  },
];

const AdminPromoProducts = () => {
  return <Table columns={tableColumns} data={tableData}></Table>;
};

export default AdminPromoProducts;

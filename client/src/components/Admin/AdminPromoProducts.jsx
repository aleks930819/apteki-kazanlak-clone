import { BsPencilSquare } from 'react-icons/bs';

import { getPromoProducts } from '../../services/apiPromoProducts';

import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';

import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const tableColumns = [
  { label: 'Име на продукта', dataKey: 'productName' },
  { label: 'Стара цена', dataKey: 'oldPrice' },
  { label: 'Нова цена', dataKey: 'newPrice' },
  {
    label: 'Снимка',
    dataKey: 'image',
    render: (rowData) => (
      <div className="flex items-center">
        <img src={rowData.image} alt="image" className="h-[45px] w-[45px]" />
      </div>
    ),
  },
  {
    label: 'Редактирай',
    dataKey: 'edit',
    render: (rowData) => (
      <Link
        to={`/admin/promo-products/edit/${rowData._id}`}
        className="flex items-center"
      >
        <BsPencilSquare className="cursor-pointer text-2xl text-primary" />
        <span className="ml-2">{rowData.edit}</span>
      </Link>
    ),
  },
];

const AdminPromoProducts = () => {
  const { isLoading, data: promoProducts } = useQuery({
    queryKey: ['promoProducts'],
    queryFn: getPromoProducts,
  });

  let tableData = [];

  if (isLoading) {
    return <Spinner />;
  }
  if (promoProducts) {
    tableData = [
      ...promoProducts.map((promoProduct) => ({
        _id: promoProduct._id,
        productName: promoProduct.name,
        oldPrice: promoProduct.oldPrice,
        newPrice: promoProduct.newPrice,
        image: promoProduct.image.url,
      })),
    ];
  }

  return (
    <Table
    columns={tableColumns}
    data={tableData}
      addButtonTitle="Добави Продукт"
      to="/admin/promo-products/add"
    ></Table>
  );
};

export default AdminPromoProducts;

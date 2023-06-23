import { getPromoProducts } from '../../services/apiPromoProducts';
import Table from '../../ui/Table';
import { BsPencilSquare } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';

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
  {
    label: 'Добави Аптека',
    dataKey: 'add',
    render: (rowData) => (
      <Link
        to="/admin/promo-products/add"
        className="flex cursor-pointer items-center"
      >
        <AiFillPlusCircle className="text-2xl" />
        <span className="ml-2">{rowData.add}</span>
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
        image: promoProduct.image,
      })),
    ];
  }

  return <Table columns={tableColumns} data={tableData}></Table>;
};

export default AdminPromoProducts;

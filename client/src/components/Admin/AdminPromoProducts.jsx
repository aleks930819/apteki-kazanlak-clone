import { getPromoProducts } from '../../services/apiPromoProducts';
import Table from '../../ui/Table';
import { BsPencilSquare } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
  const promoProducts = useLoaderData();

  const tableData = [
    ...promoProducts.map((promoProduct) => ({
      productName: promoProduct.name,
      oldPrice: promoProduct.oldPrice,
      newPrice: promoProduct.newPrice,
      image: promoProduct.image,
    })),
  ];

  return <Table columns={tableColumns} data={tableData}></Table>;
};

export const loader = async () => {
  const promoProducts = await getPromoProducts();
  return promoProducts;
};

export default AdminPromoProducts;

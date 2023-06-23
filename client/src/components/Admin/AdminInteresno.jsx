import { getNews } from '../../services/apiInteresting';
import Table from '../../ui/Table';
import { BsPencilSquare } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

import { useLoaderData } from 'react-router-dom';

const tableColumns = [
  { label: 'Заглавие на статията', dataKey: 'title' },
  { label: 'Дата', dataKey: 'date' },
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
      <div className="flex cursor-pointer items-center">
        <BsPencilSquare className="text-2xl text-primary" />
        <span className="ml-2">{rowData.edit}</span>
      </div>
    ),
  },
  {
    label: 'Добави Статия',
    dataKey: 'add',
    render: (rowData) => (
      <div className="flex cursor-pointer items-center">
        <AiFillPlusCircle className="text-2xl text-primary" />
        <span className="ml-2">{rowData.add}</span>
      </div>
    ),
  },
];

const AdminInteresno = () => {
  const news = useLoaderData();

  const tableData = [
    ...news.map((news) => ({
      title: news.title,
      date: news.createdAt,
      image: news.image,
    })),
  ];

  return <Table columns={tableColumns} data={tableData}></Table>;
};

export const loader = async () => {
  const news = getNews();
  return news;
};

export default AdminInteresno;

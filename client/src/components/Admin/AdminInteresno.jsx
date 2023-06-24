import { useQuery } from '@tanstack/react-query';

import { Link } from 'react-router-dom';

import { BsPencilSquare } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';

import { getNews } from '../../services/apiInteresting';

import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';

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
      <Link
        to={`/admin/interesno/edit/${rowData.slug}`}
        className="flex cursor-pointer items-center"
      >
        <BsPencilSquare className="text-2xl text-primary" />
        <span className="ml-2">{rowData.edit}</span>
      </Link>
    ),
  },
  {
    label: 'Добави Статия',
    dataKey: 'add',
    render: (rowData) => (
      <Link
        to="/admin/interesno/add"
        className="flex cursor-pointer items-center"
      >
        <AiFillPlusCircle className="text-2xl text-primary" />
        <span className="ml-2">{rowData.add}</span>
      </Link>
    ),
  },
];

const AdminInteresno = () => {
  const { isLoading, data: news } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  let tableData = [];
  if (isLoading) {
    return <Spinner />;
  }

  if (news) {
    tableData = [
      ...news.map((news) => ({
        _id: news._id,
        slug: news.slug,
        title: news.title,
        date: news.createdAt,
        image: news.image,
      })),
    ];
  }

  return <Table columns={tableColumns} data={tableData}></Table>;
};

export default AdminInteresno;

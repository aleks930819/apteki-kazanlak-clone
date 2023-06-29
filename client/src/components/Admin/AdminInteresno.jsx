import { useQuery } from '@tanstack/react-query';

import { Link } from 'react-router-dom';

import { BsPencilSquare } from 'react-icons/bs';

import { getNews } from '../../services/apiInteresting';

import Table from '../../ui/Table';
import formatDate from '../../utils/formatDate';

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
];

const AdminInteresno = () => {
  const { data: news } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  let tableData = [];

  if (news) {
    tableData = [
      ...news.map((newsItem) => ({
        _id: newsItem._id,
        slug: newsItem.slug,
        title: newsItem.title,
        date: formatDate(newsItem.createdAt), // Format the date
        image: newsItem.image.url,
      })),
    ];
  }

  return (
    <Table
      columns={tableColumns}
      data={tableData}
      addButtonTitle="Добави Статия"
      to="/admin/interesno/add"
    ></Table>
  );
};

export default AdminInteresno;

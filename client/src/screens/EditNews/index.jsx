import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getNews, getSingleNews } from '../../services/apiInteresting';

import useUpdateNews from '../../hooks/useUpdateNews';
import useDeleteNews from '../../hooks/useDeleteNews';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';

const EditNewsScreen = () => {
  const { slug } = useParams();

  const { editingLoading, updateNews } = useUpdateNews(slug);
  const { deleteNews, deletingLoading } = useDeleteNews(slug);

  const { isLoading, data } = useQuery(['singleNews', slug], () =>
    getSingleNews(slug)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const { title, summary, image, description } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deletingLoading) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      updateNews(data);
    }
  };

  return (
    <ActionForm
      heading="Редактирай статия"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={editingLoading}
      onDeleteAction={deleteNews}
      isDeleting={deletingLoading}
      deleteButton={'Изтрий'}
    >
      <InputField
        type="text"
        label="Залгавие на статията"
        id="title"
        name="title"
        placeholder={title}
      />
      <InputField
        type="text"
        label="Кратко описание"
        id="summary"
        name="summary"
        placeholder={summary}
      />
      <InputField
        type="text"
        label="Заглавна снимка"
        id="image"
        name="image"
        placeholder={image}
      />
      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        placeholder={description}
      />
    </ActionForm>
  );
};

export default EditNewsScreen;

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useContext, useState } from 'react';

import { getSingleNews } from '../../services/apiInteresting';

import useUpdateNews from '../../hooks/useUpdateNews';
import useDeleteNews from '../../hooks/useDeleteNews';
import useImageUploader from '../../hooks/useUploadImage';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';
import setChangedValue from '../../utils/changeValueHandler';
import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

const EditNewsScreen = () => {
  const { slug } = useParams();
  const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    title: '',
    summary: '',
    image: '',
    description: '',
  });

  const { editingLoading, updateNews } = useUpdateNews(slug, user);
  const { deleteNews, deletingLoading } = useDeleteNews(slug, user);
  const {
    isLoadingImageUpload,
    image: newImage,
    handleImageUpload,
  } = useImageUploader();

  const { isLoading, data } = useQuery(['singleNews', slug], () =>
    getSingleNews(slug)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const { title, summary, image, description } = data;

  if (!values.title) {
    setValues({ title, summary, image, description });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deletingLoading) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      updateNews(data);
    }
  };

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
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
        onChange={changeHandler}
        value={values.title}
      />
      <InputField
        type="text"
        label="Кратко описание"
        id="summary"
        name="summary"
        onChange={changeHandler}
        value={values.summary}
      />
      <UploadImageInput
        id="image"
        label="Снимка"
        handleFileChange={handleImageUpload}
        image={values.image}
      />
      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        onChange={changeHandler}
        value={values.description}
      />
    </ActionForm>
  );
};

export default EditNewsScreen;

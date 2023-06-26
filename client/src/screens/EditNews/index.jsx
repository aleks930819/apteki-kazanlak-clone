import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useContext, useState } from 'react';

import { getSingleNews } from '../../services/apiInteresting';

import useUpdateNews from '../../hooks/useUpdateNews';
import useDeleteNews from '../../hooks/useDeleteNews';
import useImagesUploader from '../../hooks/useUploadImages';

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
    image: mainImage,
    handleImageUpload,
  } = useImagesUploader();

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
      <div className="grid grid-cols-2 gap-x-10">
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
      </div>
      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        onChange={changeHandler}
        value={values.description}
      />
      <UploadImageInput
        image={image}
        handleImagesUpload={handleImageUpload}
        data={data}
        itemToUpdate={slug}
      />
    </ActionForm>
  );
};

export default EditNewsScreen;

import useAddNewNews from '../../hooks/useAddNewNews';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { toast } from 'react-hot-toast';
import { useContext } from 'react';

import useImageUploader from '../../hooks/useUploadImage';

import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

const AddNewNews = () => {
  const { user } = useContext(AuthContext);
  const { addNewNewsing, addingNewNewsLoading } = useAddNewNews(user);
  const { isLoadingImageUpload, image, handleImageUpload } = useImageUploader();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.image || !data.title || !data.summary || !data.description) {
      return toast.error('Моля попълнете всички полета!');
    }

    data.image = image;

    addNewNewsing(data);
  };

  return (
    <ActionForm
      heading="Добавате нова статия"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingNewNewsLoading || isLoadingImageUpload}
    >
      <InputField
        type="text"
        label="Залгавие на статията"
        id="title"
        name="title"
        required
      />
      <InputField
        type="text"
        label="Кратко описание"
        id="summary"
        name="summary"
        required
      />

      <UploadImageInput
        id="image"
        label="Снимка"
        handleFileChange={handleImageUpload}
        value={image}
        image={image}
      />

      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        required
      />
    </ActionForm>
  );
};

export default AddNewNews;

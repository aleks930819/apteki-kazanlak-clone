import useAddNewNews from '../../hooks/useAddNewNews';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { toast } from 'react-hot-toast';
import { useContext } from 'react';

import useImageUploader from '../../hooks/useUploadImages';

import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

const AddNewNews = () => {
  const { user } = useContext(AuthContext);
  const { addNewNewsing, addingNewNewsLoading } = useAddNewNews(user);

  const { isLoadingImageUpload, images, handleImagesUpload } =
    useImageUploader();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    data.image = images[0];

    if (!data.image || !data.title || !data.summary || !data.description) {
      return toast.error('Моля попълнете всички полета!');
    }

    addNewNewsing(data);
  };

  return (
    <ActionForm
      heading="Добавате нова статия"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingNewNewsLoading || isLoadingImageUpload}
    >
      <div className="grid grid-cols-2 gap-x-10">
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
      </div>
      <UploadImageInput
        id="image"
        label="Снимка"
        handleFileChange={handleImagesUpload}
        value={images}
        image={images[0]}
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

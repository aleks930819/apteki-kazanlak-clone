import useAddNewNews from '../../hooks/useAddNewNews';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { toast } from 'react-hot-toast';
import { useContext } from 'react';

import useImageUploader from '../../hooks/useUploadImages';

import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

import { useState } from 'react';

import setChangedValue from '../../utils/changeValueHandler';

const AddNewNews = () => {
  const { user } = useContext(AuthContext);
  const { addNewNewsing, addingNewNewsLoading } = useAddNewNews(user);

  const [values, setValues] = useState({
    title: '',
    summary: '',
    image: '',
    description: '',
  });

  const { isLoadingImageUpload, images, handleImagesUpload } =
    useImageUploader();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !values.title ||
      !values.summary ||
      !values.description ||
      !images.mainImage.url
    ) {
      return toast.error('Моля попълнете всички полета!');
    }

    const data = {
      ...values,
      image: {
        url: images?.mainImage.url,
        filename: images?.mainImage.filename,
      },
    };
    addNewNewsing(data);
  };

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
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
          onChange={changeHandler}
        />
        <InputField
          type="text"
          label="Кратко описание"
          id="summary"
          name="summary"
          required
          onChange={changeHandler}
        />
      </div>
      <UploadImageInput
        id="image"
        label="Снимка"
        handleFileChange={handleImagesUpload}
        value={images?.mainImage.url}
        image={images?.mainImage.url}
        imageName="mainImage"
      />

      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        required
        onChange={changeHandler}
      />
    </ActionForm>
  );
};

export default AddNewNews;

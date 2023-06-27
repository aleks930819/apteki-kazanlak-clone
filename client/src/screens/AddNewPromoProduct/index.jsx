import { toast } from 'react-hot-toast';
import { useContext } from 'react';

import useAddPromoProduct from '../../hooks/useAddPromoProduct';
import useImagesUploader from '../../hooks/useUploadImages';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

import { useState } from 'react';

import setChangedValue from '../../utils/changeValueHandler';

const AddNewPromoProductScreen = () => {
  const { user } = useContext(AuthContext);
  const { addPromoProduct, addingPromoProductLoading } =
    useAddPromoProduct(user);
  const { isLoadingImageUpload, images, handleImagesUpload } =
    useImagesUploader();

  const [values, setValues] = useState({
    name: '',
    oldPrice: '',
    newPrice: '',
    description: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !values.name ||
      !values.oldPrice ||
      !values.newPrice ||
      !values.description ||
      !images?.mainImage.url
    ) {
      return toast.error('Моля попълнете всички полета!');
    }

    if (values.oldPrice <= values.newPrice) {
      return toast.error('Новата цена трябва да е по-малка от старата!');
    }

    const data = {
      ...values,
      image: {
        url: images?.mainImage.url,
        filename: images?.mainImage.filename,
      },
    };

    addPromoProduct(data);
  };

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  return (
    <ActionForm
      heading="Добавете нов продукт"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingPromoProductLoading || isLoadingImageUpload}
    >
      <div className="grid w-full gap-x-10">
        <InputField
          type="text"
          label="Име на продукта"
          id="name"
          name="name"
          required
          value={values.name}
          onChange={changeHandler}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-10">
        <InputField
          type="number"
          step={0.01}
          label="Стара Цена"
          id="oldPrice"
          name="oldPrice"
          required
          value={values.oldPrice}
          onChange={changeHandler}
        />
        <InputField
          type="number"
          label="Нова Цена"
          id="newPrice"
          step={0.01}
          name="newPrice"
          value={values.newPrice}
          required
          onChange={changeHandler}
        />
      </div>

      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        value={values.description}
        required
        onChange={changeHandler}
      />
      <UploadImageInput
        id="image"
        label="Снимка"
        handleFileChange={handleImagesUpload}
        imageName="mainImage"
        value={images?.mainImage.url}
        image={images?.mainImage.url}
      />
    </ActionForm>
  );
};

export default AddNewPromoProductScreen;

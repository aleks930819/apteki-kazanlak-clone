import { toast } from 'react-hot-toast';
import { useContext } from 'react';

import useAddPromoProduct from '../../hooks/useAddPromoProduct';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { AuthContext } from '../../context/AuthContext';
import useImageUploader from '../../hooks/useUploadImage';

const AddNewPromoProductScreen = () => {
  const { user } = useContext(AuthContext);
  const { addPromoProduct, addingPromoProductLoading } =
    useAddPromoProduct(user);
  const { isLoadingImageUpload, image, handleImageUpload } = useImageUploader();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (
      !data.name ||
      !data.oldPrice ||
      !data.newPrice ||
      !data.image ||
      !data.description
    ) {
      return toast.error('Моля попълнете всички полета!');
    }

    data.image = image;

    addPromoProduct(data);
  };

  return (
    <ActionForm
      heading="Добавете нов продукт"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingPromoProductLoading || isLoadingImageUpload}
    >
      <InputField
        type="text"
        label="Име на продукта"
        id="name"
        name="name"
        required
      />
      <InputField
        type="number"
        label="Стара Цена"
        id="oldPrice"
        name="oldPrice"
        required
      />
      <InputField
        type="number"
        label="Нова Цена"
        id="newPrice"
        name="newPrice"
        required
      />

      <InputField
        type="file"
        label="Снимка"
        id="image"
        name="image"
        required
        onChange={handleImageUpload}
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

export default AddNewPromoProductScreen;

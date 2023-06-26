import { toast } from 'react-hot-toast';
import { useContext } from 'react';

import useAddPromoProduct from '../../hooks/useAddPromoProduct';
import useImagesUploader from '../../hooks/useUploadImages';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

const AddNewPromoProductScreen = () => {
  const { user } = useContext(AuthContext);
  const { addPromoProduct, addingPromoProductLoading } =
    useAddPromoProduct(user);
  const { isLoadingImageUpload, images, handleImagesUpload } =
    useImagesUploader();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    data.image = images.mainImage;

    if (
      !data.name ||
      !data.oldPrice ||
      !data.newPrice ||
      !data.image ||
      !data.description
    ) {
      return toast.error('Моля попълнете всички полета!');
    }

    addPromoProduct(data);
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
        />
        <InputField
          type="number"
          label="Нова Цена"
          id="newPrice"
          step={0.01}
          name="newPrice"
          required
        />
      </div>

      <TextAreaField
        label="Описание"
        id="description"
        name="description"
        required
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

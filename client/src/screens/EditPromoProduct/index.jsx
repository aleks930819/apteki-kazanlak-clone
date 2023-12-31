import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';

import { useContext, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

import { getProductById } from '../../services/apiPromoProducts';

import useDeletePromoProduct from '../../hooks/useDeletePromoProduct';
import useUpdatePromoProduct from '../../hooks/useUpdatePromoProduct';
import useImagesUploader from '../../hooks/useUploadImages';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';
import UploadImageInput from '../../ui/UploadImageInput';

import setChangedValue from '../../utils/changeValueHandler';
import priceValidation from '../../utils/priceValidation';

const EditPromoScreeen = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    name: '',
    oldPrice: null,
    newPrice: null,
    description: '',
    image: '',
  });

  const { editingLoading, updateProduct } = useUpdatePromoProduct(id, user);
  const { deleteProduct, deletingLoading } = useDeletePromoProduct(id, user);
  const { images, handleImagesUpload, isLoadingImageUpload } =
    useImagesUploader();

  const { isLoading, data } = useQuery(['promoProducts', id], () =>
    getProductById(id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const { name, description, oldPrice, newPrice, image } = data;

  if (!values.name) {
    setValues({ name, description, oldPrice, newPrice, image });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = priceValidation(values.newPrice, values.oldPrice);

    if (validationError) {
      return toast.error(validationError);
    }

    const updatedData = {
      ...values,
      image: {
        url: images?.mainImage.url || values?.image.url,
        name: images?.mainImage.name || values?.image.name,
      },
    };

    updateProduct(updatedData);
  };

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  return (
    <ActionForm
      heading="Редактирай продукт"
      buttonName="Редактирай"
      deleteButton="Изтрий"
      method="POST"
      isLoading={editingLoading || isLoadingImageUpload || deletingLoading}
      onSubmit={handleSubmit}
      editingLoading={editingLoading}
      deletingLoading={deletingLoading}
      onDeleteAction={deleteProduct}
      deleteMessage="Сигурни ли сте, че искате да изтриете този продукт?"
    >
      <div className="w-full">
        <InputField
          type="text"
          label="Име на продукта"
          id="name"
          name="name"
          onChange={changeHandler}
          value={values.name}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField
          type="text"
          label="Стара цена"
          id="oldPrice"
          name="oldPrice"
          placeholder={oldPrice}
          onChange={changeHandler}
          value={values.oldPrice}
        />
        <InputField
          type="text"
          label="Нова цена"
          id="newPrice"
          name="newPrice"
          placeholder={newPrice}
          onChange={changeHandler}
          value={values.newPrice}
        />
      </div>

      <TextAreaField
        type="text"
        label="Описание на продукта"
        id="description"
        name="description"
        placeholder={description}
        onChange={changeHandler}
        value={values.description}
      />
      <UploadImageInput
        id="image"
        inputMessage="Променете снимката"
        handleFileChange={handleImagesUpload}
        image={images?.mainImage.url || values?.image.url}
        imageName="mainImage"
        isLoading={isLoadingImageUpload}
      />
    </ActionForm>
  );
};

export default EditPromoScreeen;

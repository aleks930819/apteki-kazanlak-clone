import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useContext, useEffect, useState } from 'react';

import { getProductById } from '../../services/apiPromoProducts';

import useDeletePromoProduct from '../../hooks/useDeletePromoProduct';
import useUpdatePromoProduct from '../../hooks/useUpdatePromoProduct';
import useImagesUploader from '../../hooks/useUploadImages';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';
import setChangedValue from '../../utils/changeValueHandler';
import { AuthContext } from '../../context/AuthContext';
import UploadImageInput from '../../ui/UploadImageInput';

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
  const { images, handleImagesUpload } = useImagesUploader();

  const { isLoading, data } = useQuery(['singleProduct', id], () =>
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

    if (!deletingLoading) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      data.image = images[0];
      updateProduct(data);
    }
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
        value={images}
        image={image.url}
      />
    </ActionForm>
  );
};

export default EditPromoScreeen;

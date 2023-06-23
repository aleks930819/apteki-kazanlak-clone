import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import {
  getProductById,
  updateProductById,
  deleteProductById,
} from '../../services/apiPromoProducts';

import useDeletePromoProduct from '../../hooks/useDeletePromoProduct';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';

const EditPromoScreeen = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: editingLoading, mutate: updateProduct } = useMutation({
    mutationFn: (data) => updateProductById(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promoProducts'],
      });
      toast.success('Продуктът е променен успешно!');
      navigate('/admin/promo-products');
    },
    onError: (error) => toast.error(error.message),
  });

  const { deleteProduct, deletingLoading } = useDeletePromoProduct(id);

  // const { isLoading: deletingLoading, mutate: deleteProduct } = useMutation({
  //   mutationFn: () => deleteProductById(id),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ['promoProducts'],
  //     });

  //     toast.success('Продуктът е изтрит успешно!');
  //     navigate('/admin/promo-products');
  //   },
  //   onError: (error) => toast.error(error.message),
  // });

  const { isLoading, data } = useQuery(['singleProduct', id], () =>
    getProductById(id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const { name, description, oldPrice, newPrice, image } = data;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deletingLoading) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      updateProduct(data);
    }
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
    >
      <InputField
        type="text"
        label="Име на продукта"
        id="name"
        name="name"
        placeholder={name}
      />

      <InputField
        type="text"
        label="Стара цена"
        id="oldPrice"
        name="oldPrice"
        placeholder={oldPrice}
      />
      <InputField
        type="text"
        label="Нова цена"
        id="newPrice"
        name="newPrice"
        placeholder={newPrice}
      />
      <InputField
        type="text"
        label="Снимка"
        id="image"
        name="image"
        placeholder={image}
      />
      <TextAreaField
        type="text"
        label="Описание на продукта"
        id="description"
        name="description"
        placeholder={description}
      />
    </ActionForm>
  );
};

export default EditPromoScreeen;

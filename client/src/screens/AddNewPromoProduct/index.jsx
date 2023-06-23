import { useNavigate } from 'react-router-dom';
import { createNewPromoProduct } from '../../services/apiPromoProducts';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AddNewPromoProductScreen = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: createNewPromoProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['promoProducts'],
      });
      toast.success('Продуктът е добавен успешно!');
      navigate('/admin/promo-products');
    },
    onError: (error) => toast.error(error.message),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);
  };

  return (
    <ActionForm
      heading="Добави нов продукт"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={isLoading}
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
      <InputField type="text" label="Снимка" id="image" name="image" required />
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

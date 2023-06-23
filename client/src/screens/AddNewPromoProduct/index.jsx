import useAddPromoProduct from '../../hooks/useAddPromoProduct';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

const AddNewPromoProductScreen = () => {
  const { addPromoProduct, addingPromoProductLoading } = useAddPromoProduct();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    addPromoProduct(data);
  };

  return (
    <ActionForm
      heading="Добави нов продукт"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingPromoProductLoading}
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

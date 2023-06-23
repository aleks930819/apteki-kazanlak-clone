import { Form, redirect } from 'react-router-dom';
import { createNewPromoProduct } from '../../services/apiPromoProducts';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

const AddNewPromoProductScreen = () => {
  return (
    <ActionForm heading="Добави нов продукт" buttonName="Добави" method="POST">
      <InputField type="text" label="Име на продукта" id="name" name="name" />
      <InputField
        type="number"
        label="Стара Цена"
        id="oldPrice"
        name="oldPrice"
      />
      <InputField
        type="number"
        label="Нова Цена"
        id="newPrice"
        name="newPrice"
      />
      <InputField type="text" label="Снимка" id="image" name="image" />
      <TextAreaField label="Описание" id="description" name="description" />
    </ActionForm>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await createNewPromoProduct(data);

  return redirect('/admin/promo-products');
};

export default AddNewPromoProductScreen;

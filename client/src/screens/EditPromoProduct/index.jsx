import {
  getProductById,
  updateProductById,
} from '../../services/apiPromoProducts';
import { useLoaderData, redirect } from 'react-router-dom';
import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';

const EditPromoScreeen = () => {
  const { name, description, oldPrice, newPrice, image, _id } = useLoaderData();

  return (
    <ActionForm
      heading="Редактирай продукт"
      buttonName="Редактирай"
      method="POST"
    >
      <input type="hidden" name="_id" value={_id} />
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

export const loader = async ({ params }) => {
  const { id } = params;
  const product = await getProductById(id);

  return product;
};

export const action = async ({ request }) => {
  const body = await request.formData();
  const data = Object.fromEntries(body);

  await updateProductById(data._id, data);

  return redirect('/admin/promo-products');
};

export default EditPromoScreeen;

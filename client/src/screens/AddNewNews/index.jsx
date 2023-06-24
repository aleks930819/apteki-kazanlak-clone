import useAddNewNews from '../../hooks/useAddNewNews';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import { toast } from 'react-hot-toast';

const AddNewNews = () => {
  const { addNewNewsing, addingNewNewsLoading } = useAddNewNews();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.image || !data.title || !data.summary || !data.description) {
      return toast.error('Моля попълнете всички полета!');
    }

    addNewNewsing(data);
  };

  return (
    <ActionForm
      heading="Добавате нова статия"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingNewNewsLoading}
    >
      <InputField
        type="text"
        label="Залгавие на статията"
        id="title"
        name="title"
        required
      />
      <InputField
        type="text"
        label="Кратко описание"
        id="summary"
        name="summary"
        required
      />
      <InputField
        type="text"
        label="Заглавна снимка"
        id="image"
        name="image"
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

export default AddNewNews;

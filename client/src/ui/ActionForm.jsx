import { Form } from 'react-router-dom';

const ActionForm = ({ heading, buttonName, children, onSubmit }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white p-4 shadow-md">
      <Form
        method="POST"
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-5 text-blue-dark"
      >
        <h1 className="mb-2 mt-2 text-3xl">{heading}</h1>
        {children}
        <button
          className="rounded-md border-2 border-primary bg-primary px-4 py-2 font-bold uppercase text-white"
          type="submit"
        >
          {buttonName}
        </button>
      </Form>
    </div>
  );
};

export default ActionForm;

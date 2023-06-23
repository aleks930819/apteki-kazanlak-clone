import { Form } from 'react-router-dom';

const ActionForm = ({
  heading,
  buttonName,
  children,
  onSubmit,
  deleteButton,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white p-4 shadow-md">
      <Form
        method="POST"
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-5 text-blue-dark"
      >
        <h1 className="mb-2 mt-2 text-3xl">{heading}</h1>
        {children}
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border-2 border-primary bg-primary px-4 py-2 font-bold uppercase text-white"
            type="submit"
          >
            {buttonName}
          </button>
          {deleteButton && (
            <>
              <input type="hidden" name="_method" value="DELETE" />
              <button
                className="rounded-md border-2  bg-red-600 px-4 py-2 font-bold uppercase text-white"
                type="submit"
              >
                {deleteButton}
              </button>
            </>
          )}
        </div>
      </Form>
    </div>
  );
};

export default ActionForm;

const ActionForm = ({
  heading,
  buttonName,
  children,
  onSubmit,
  isLoading,
  deleteButton,
  editingLoading,
  deletingLoading,
  onDeleteAction,
}) => {
  
  const handleDelete = (deleteMessage) => {
    const shouldDelete = window.confirm(deleteMessage);
    if (shouldDelete) {
      onDeleteAction();
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-md  p-4 shadow-md">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-5 text-blue-dark"
      >
        <h1 className="mb-2 mt-2 text-3xl">{heading}</h1>
        {children}
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border-2 border-primary bg-primary px-4 py-2 font-bold uppercase text-white
             disabled:cursor-not-allowed disabled:opacity-80
            "
            type="submit"
            disabled={editingLoading || isLoading}
          >
            {buttonName}
          </button>
          {deleteButton && (
            <button
              className="rounded-md border-2  bg-red-600 px-4  py-2 font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-80"
              type="button"
              disabled={deletingLoading}
              onClick={() => handleDelete('Сигурни ли сте?')}
            >
              {deleteButton}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ActionForm;

const InputsWrapper = ({ children }) => {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 w-full">{children}</div>
  );
};

export default InputsWrapper;

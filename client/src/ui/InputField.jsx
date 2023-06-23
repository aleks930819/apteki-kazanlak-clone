const InputField = ({ type, label, name, id, placeholder, value }) => {
  return (
    <div className="flex w-full flex-col items-start">
      <label htmlFor={id} className="mb-2 font-bold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className="w-full rounded-md border-2 border-gray-300 p-2 outline-none focus:border-primary"
      />
    </div>
  );
};

export default InputField;

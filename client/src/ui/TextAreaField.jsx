const TextAreaField = ({
  label,
  name,
  id,
  placeholder,
  required,
  value,
  onChange,
}) => {
  return (
    <div className="flex w-full flex-col items-start">
      <label htmlFor={id} className="mb-2 font-bold text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={6}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border-2 border-gray-300 outline-none focus:border-primary"
      ></textarea>
    </div>
  );
};

export default TextAreaField;

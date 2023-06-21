const ContactInfoAddress = ({ city, street }) => {
  return (
    <p>
      <span className="font-semibold text-grey-dark mb-4"> Адрес:</span>
      <br />
      <p>{city}</p>
      <p>{street}</p>
    </p>
  );
};

export default ContactInfoAddress;

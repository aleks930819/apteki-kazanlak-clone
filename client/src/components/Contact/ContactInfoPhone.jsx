const ContactInfoPhone = ({ phone }) => {
  return (
    <p>
      <span className="font-semibold text-grey-dark">Телефон:</span>
      <br />
      <p>{phone}</p>
    </p>
  );
};

export default ContactInfoPhone;

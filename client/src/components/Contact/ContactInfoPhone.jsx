const ContactInfoPhone = ({ phone }) => {
  return (
    <p>
      <span className="font-semibold text-grey-dark mb-4">Телефон:</span>
      <br />
      <p>{phone}</p>
    </p>
  );
};

export default ContactInfoPhone;

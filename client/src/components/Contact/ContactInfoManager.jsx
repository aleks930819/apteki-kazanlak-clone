const ContactInfoManager = ({ manager }) => {
  return (
    <p>
      <span className="font-semibold text-grey-dark">Управител:</span>
      <br />
      <p>{manager}</p>
    </p>
  );
};

export default ContactInfoManager;

const ContactInfoManager = ({ managerName }) => {
  return (
    <p>
      <span className="font-semibold text-grey-dark">Управител:</span>
      <br />
      <p>{managerName}</p>
    </p>
  );
};

export default ContactInfoManager;

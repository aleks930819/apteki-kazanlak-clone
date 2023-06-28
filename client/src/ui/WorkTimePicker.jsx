import TimePicker from 'react-time-picker';

const WorkTimePicker = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <span>{label}</span>
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
};

export default WorkTimePicker;

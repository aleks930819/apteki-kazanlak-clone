const formattedHours = (openingHours, closingHours) => {
  if (openingHours === '' || closingHours === '') {
    return 'Почивен ден';
  }
  return `${openingHours}ч. – ${closingHours}ч.`;
};

export default formattedHours;

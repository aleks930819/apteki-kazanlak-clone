const ChoiceButtons = ({ selectedChoices, handleChoiceClick }) => {
  const choices = [
    'Обикновени рецепти',
    'Рецепти по НЗОК',
    'Жълти рецепти',
    'Зелени рецепти',
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {choices.map((choice) => (
        <button
          type="button"
          key={choice}
          className={` 
          rounded-md px-4 py-2 text-lg
          ${
            selectedChoices.includes(choice)
              ? 'bg-primary text-white'
              : 'border-2 border-black'
          }`}
          onClick={() => handleChoiceClick(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;

const nomenclature = [
  {
    title: 'ОТС продукти',
  },
  {
    title: 'Лекарско предписание',
  },
  {
    title: 'Лекарства, отпускани със зелени и жълти рецепти',
  },
  {
    title: 'Лекарства, реимбурсирани от НЗОК',
  },
  {
    title: 'Хранителни добавки',
  },
  {
    title: 'Козметика',
  },
  {
    title: 'Санитарни принадлежности',
  },
  {
    title: 'Ортопедрични принадлежности',
  },
  {
    title: 'Апарати за измерване на кръвно налягане',
  },
  {
    title: 'Глюкомери',
  },
];

const FooterNomenclature = () => {
  return (
    <div>
      <h2 className="border-b-[1px] border-white pb-2 text-start text-2xl">
        Номенклатура
      </h2>
      <ul className="flex flex-col pt-4">
        {nomenclature.map((link) => (
          <li key={link.title} className="text-start text-sm">
            <div className="group relative">
              <span
                className="transition 
                duration-300 hover:opacity-80
                "
              >
                {link.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNomenclature;

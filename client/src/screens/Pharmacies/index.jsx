import ContactBanner from '../../components/Contact/ContactBanner';
import ContactInfo from '../../components/Contact/ContactInfo';

const pharmaciesData = [
  {
    name: 'ХИГИЯ',
    city: 'гр. Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    weekdayHours: '08:00ч. - 21:00ч.',
    saturdayHours: '09:00ч. - 21:00ч.',
    sundayHours: '09:00ч. - 21:00ч.',
    manager: 'Христина Иванова - Теодосиева',
  },
  {
    name: 'ФАРМА 1 КАЗАНЛЪК',
    city: 'гр. Казанлък',
    street: 'ул. "Ген Стобелев" 17',
    phone: '0431/7 50 57',
    weekdayHours: '08:00ч. - 19:00ч.',
    saturdayHours: '09:00ч. - 14:00ч.',
    sundayHours: 'Почивен ден',
    manager: 'Иван Гитев',
  },
  {
    name: 'АРНИКА',
    city: 'гр. Казанлък',
    street: 'бул. Розова долина №2',
    phone: '0431/6 24 15',
    weekdayHours: '08:00ч. - 19:00ч.',
    saturdayHours: '09:00ч. - 14:00ч.',
    sundayHours: 'Почивен ден',
    manager: 'Христина Ванкина',
  },
  {
    name: 'ФАРМАВИСТ',
    city: 'гр. Казанлък',
    street: 'кв. "Изток", бл. 76',
    phone: '0431/4 00 40',
    weekdayHours: '08:00ч. - 19:00ч.',
    saturdayHours: '09:00ч. - 14:00ч.',
    sundayHours: 'Почивен ден.',
    manager: 'Виктория Башаранова',
  },
  {
    name: 'ФАРМА 1 ПАВЕЛ БАНЯ',
    city: 'гр. Павел Баня',
    street: 'ул. Ген. Столетов 14',
    phone: '04361/20 60',
    weekdayHours: '08:30ч. - 18:30ч.',
    saturdayHours: '09:00ч. - 16:30ч.',
    sundayHours: 'Почивен ден',
    manager: 'Кристияна Димитрова',
  },
  {
    name: 'ФАРМА 1 ЦЕНТЪР',
    city: 'гр. Казанлък',
    street: 'ул. "Отец Паисий" 2 Б',
    phone: '0431/4 00 10',
    weekdayHours: '08:00ч. - 19:00ч.',
    saturdayHours: '09:00ч. -  14:00ч.',
    sundayHours: 'Почивен ден',
    manager: 'Мария Кръстева',
  },
];

const PharmaciesScreen = () => {
  return (
    <>
      <ContactBanner />
      <section className=" bg-grey-lighter-2 ">
        <div
          className="container mx-auto 
         mb-28   mt-24 w-full p-2 sm:w-[70vw] sm:p-0
        "
        >
          <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-y-32 lg:grid-cols-3">
            {pharmaciesData.map((pharmacy) => (
              <ContactInfo
                key={pharmacy.name}
                name={pharmacy.name}
                city={pharmacy.city}
                street={pharmacy.street}
                phone={pharmacy.phone}
                weekdayHours={pharmacy.weekdayHours}
                saturdayHours={pharmacy.saturdayHours}
                sundayHours={pharmacy.sundayHours}
                manager={pharmacy.manager}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PharmaciesScreen;

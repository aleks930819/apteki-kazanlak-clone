import slugify from 'slugify';

const pharmaciesData = [
  {
    name: 'ХИГИЯ',
    phone: '0431/6 34 95',
    address: {
      city: 'гр. Казанлък',
      street: 'ул. "Отец Паисий" № 33',
    },
    history: 'Pharmacy history description',
    workingHours: {
      mondayToFriday: ['08:00', '19:00'],
      saturday: ['09:00', '21:00'],
      sunday: ['09:00', '21:00'],
    },
    managerName: 'Христина Иванова - Теодосиева',
    managerTitle: 'Магистър фармацевт',
    managerDescription: 'Manager description',
    slug: slugify('ХИГИЯ', { lower: true }, { replacement: '-' }),
  },

  {
    name: 'ФАРМА 1 КАЗАНЛЪК',
    phone: '0431/7 50 57',
    address: {
      city: 'гр. Казанлък',
      street: 'ул. "Ген Стобелев" 17',
    },
    history: 'Pharmacy history description',
    workingHours: {
      mondayToFriday: ['08:00', '19:00'],
      saturday: ['09:00', '14:00'],
      sunday: [],
    },
    managerName: 'Иван Гитев',
    managerTitle: 'Магистър фармацевт',
    managerDescription: 'Manager description',
    slug: slugify('ФАРМА 1 КАЗАНЛЪК', { lower: true }, { replacement: '-' }),
  },
  {
    name: 'АРНИКА',
    phone: '0431/7 50 57',
    address: {
      city: 'гр. Казанлък',
      street: 'бул. Розова долина №2',
    },
    history: 'Pharmacy history description',
    workingHours: {
      mondayToFriday: ['08:00', '19:00'],
      saturday: ['09:00', '14:00'],
      sunday: [],
    },
    managerName: 'Христина Ванкина',
    managerTitle: 'Магистър фармацевт',
    managerDescription: 'Manager description',
    slug: slugify('АРНИКА', { lower: true }, { replacement: '-' }),
  },
  {
    name: 'ФАРМАВИСТ',
    phone: '0431/4 00 40',
    address: {
      city: 'гр. Казанлък',
      street: 'кв. "Изток", бл. 76',
    },
    history: 'Pharmacy history description',
    workingHours: {
      mondayToFriday: ['08:00', '19:00'],
      saturday: ['09:00', '14:00'],
      sunday: [],
    },
    managerName: 'Виктория Башаранова',
    managerTitle: 'Магистър фармацевт',
    managerDescription: 'Manager description',
    slug: slugify('ФАРМАВИСТ', { lower: true }, { replacement: '-' }),
  },
  {
    name: 'ФАРМА 1 ПАВЕЛ БАНЯ',
    phone: '04361/20 60',
    address: {
      city: 'гр. Павел Баня',
      street: 'ул. Ген. Столетов 14',
    },
    history: 'Pharmacy history description',
    workingHours: {
      mondayToFriday: ['08:30', '18:30'],
      saturday: ['09:00', '16:30'],
      sunday: [],
    },
    managerName: 'Кристияна Димитрова',
    managerTitle: 'Магистър фармацевт',
    managerDescription: 'Manager description',
    slug: slugify('ФАРМА 1 ПАВЕЛ БАНЯ', { lower: true }, { replacement: '-' }),
  },
  {
    name: 'ФАРМА 1 ЦЕНТЪР',
    phone: '0431/4 00 10',
    address: {
      city: 'гр. Казанлък',
      street: 'ул. "Отец Паисий" 2 Б',
    },
    history: 'Pharmacy history description',
    workingHours: {
      mondayToFriday: ['08:30', '19:00'],
      saturday: ['09:00', '14:00'],
      sunday: [],
    },
    managerName: 'Мария Кръстева',
    managerTitle: 'Магистър фармацевт',
    managerDescription: 'Manager description',
    slug: slugify('ФАРМА 1 ПАВЕЛ БАНЯ', { lower: true }, { replacement: '-' }),
  },
];

export default pharmaciesData;

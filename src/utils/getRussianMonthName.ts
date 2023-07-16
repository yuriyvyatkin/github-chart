const getRussianMonthName = (monthIndex: number): string => {
  const monthNames = [
    'Янв.',
    'Февр.',
    'Март',
    'Апр.',
    'Май',
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Дек.',
  ];
  return monthNames[monthIndex];
};

export default getRussianMonthName;

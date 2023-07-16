import { format, setMonth } from 'date-fns';
import { ru } from 'date-fns/locale';
import capitalizeString from './capitalizeString';

const getRussianMonthName = (monthIndex: number): string => {
  const date = setMonth(new Date(), monthIndex);
  const formattedMonthName = capitalizeString(format(date, 'LLL', { locale: ru }));
  return formattedMonthName;
};

export default getRussianMonthName;

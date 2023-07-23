import { format, setMonth } from 'date-fns';
import { ru } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';
import capitalizeString from './capitalizeString';

const getRussianMonthName = (monthIndex: number, timeZone: string): string => {
  const date = setMonth(new Date(), monthIndex);
  const zonedDate = utcToZonedTime(date, timeZone);
  const formattedMonthName = capitalizeString(format(zonedDate, 'LLL', { locale: ru }));
  return formattedMonthName;
};

export default getRussianMonthName;

import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import capitalizeString from './capitalizeString';

const formatDate = (timestamp: string): string => {
  const date = parseISO(timestamp);
  const formattedDate = format(date, 'eeee, LLLL dd, yyyy', { locale: ru });
  const parts = formattedDate.split(', ');
  parts[0] = capitalizeString(parts[0]);
  parts[1] = capitalizeString(parts[1]);

  return parts.join(', ');
};

export default formatDate;

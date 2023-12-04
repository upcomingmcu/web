import { isAfter, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const parseDateString = (dateString: string) => parseISO(dateString);

export const formatDateString = (dateString: string) =>
  formatInTimeZone(
    parseDateString(dateString),
    'America/New_York',
    'MMMM do, yyyy'
  );

export const isAfterToday = (dateToCompare: string) =>
  isAfter(parseDateString(dateToCompare), Date.now());

import { parseISO, format } from 'date-fns';

export const formatDate = (dateString) => {
  const date = parseISO(dateString);
    return format(date, "MMM d, yyyy h:mm aa");
};

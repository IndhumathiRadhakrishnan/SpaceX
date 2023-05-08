import { format } from 'date-fns';
export function formatTimeToTimezone(dateTimeUTC?: string) {
    if (!dateTimeUTC) {
      return '';
    }
    const pattern = "h:mm a"
    return format(new Date(dateTimeUTC), pattern);
  }

  export function formatDateToTimezone(dateTimeUTC?: string) {
    if (!dateTimeUTC) {
      return '';
    }
    const pattern = "yyyy-MM-dd";
    return format(new Date(dateTimeUTC), pattern);
  }
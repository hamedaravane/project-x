export function isoStringToDate(isoString: string): Date {
  return new Date(isoString);
}

export function dateToIsoString(date: Date): string {
  return date.toISOString();
}

export function gregorianDateIsoStringToJalaliDate(isoString: string): string {
  const date = isoStringToDate(isoString);
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    calendar: 'persian',
  }).format(date);
}

export function extractTimeFromIsoString(isoString: string): string {
  const date = isoStringToDate(isoString);
  return new Intl.DateTimeFormat('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Tehran',
  }).format(date);
}

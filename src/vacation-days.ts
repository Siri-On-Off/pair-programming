import { isLeapYear } from "./utils";


export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

// Zeile 9 = Signatur, darf nicht verändert werden
export function calculateProRataVacationDays(employment: Employment): number {
  const dayInMillSec = 1000 * 60 * 60 * 24;
  const diffStartUntilDatesInMillSec = Math.abs(employment.startDate.getTime() - employment.untilDate.getTime());
  const employmentInDays = Math.floor(diffStartUntilDatesInMillSec / dayInMillSec);

  const isALeapYear = isLeapYear(employment.startDate.getFullYear());
  
  let yearInDays = 365;
  if (isALeapYear) {
    yearInDays = 366;
  } 
  
  const actualVacationDays = (employment.vacationDays * (employmentInDays/yearInDays) * (employment.percentage/100));
  return Math.ceil(actualVacationDays);
}

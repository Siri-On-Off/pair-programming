export function isLeapYear(year: number): boolean {
  /*Schaltjahr ist IMMER durch 4 teilbar UND
    es darf kein Jahrhundertjahre sein, wie 300, 700, 1900, 2000,
    AUSSER es ist durch 400 teilbar.
  */
  return  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

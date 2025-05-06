export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement

  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net: salary.gross,
  };

  const gross = salary.gross;
  const yearlySalary = gross * 12;
  const born = salary.born;
  const payday = salary.payday;

  const ahv = (gross * DEDUCTION_RATES.get("AHV")) / 100; //435
  const iv = (gross * DEDUCTION_RATES.get("IV")) / 100; //5
  const eo = (gross * DEDUCTION_RATES.get("EO")) / 100;
  const alv = (gross * DEDUCTION_RATES.get("ALV")) / 100;
  const nbu = (gross * DEDUCTION_RATES.get("NBU")) / 100;
  const pk = (gross * DEDUCTION_RATES.get("PK")) / 100;

  result.deductions.set("AHV", ahv);
  result.deductions.set("IV", iv);
  result.deductions.set("EO", eo);
  result.deductions.set("ALV", alv);
  result.deductions.set("NBU", nbu);
  result.deductions.set("PK", pk);

  const totalDeductions = ahv + iv + eo + alv + nbu + pk;
  result.totalDeductions = totalDeductions;
  result.net = gross - totalDeductions;

  return result;
}

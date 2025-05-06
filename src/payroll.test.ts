import { calculatePayslip } from "./payroll";

test("calculatePayslip all Dedactions", () => {
  const salary = {
    born: new Date("1990-01-01"),
    payday: new Date("2025-10-01"),
    gross: 5000,
  };

  const payslip = calculatePayslip(salary);

  expect(payslip.salary).toEqual(salary);
  expect(payslip.deductions.size).toBe(6);
  expect(payslip.totalDeductions).toBeCloseTo(1066.5, 2);
  expect(payslip.net).toBeCloseTo(3933.5, 2);
})

test("calculatePayslip 16 years old with gross 700", () => {
  const salary = {
    born: new Date("2000-01-01"),
    payday: new Date("2016-10-01"),
    gross: 700,
  };

  const payslip = calculatePayslip(salary);

  expect(payslip.salary).toEqual(salary);
  expect(payslip.deductions.size).toBe(2);
  expect(payslip.totalDeductions).toBeCloseTo(12.81, 2);
  expect(payslip.net).toBeCloseTo(687.19, 2);
})

test("calculatePayslip 18 years old with gross 1200", () => {
  const salary = {
    born: new Date("2000-01-01"),
    payday: new Date("2018-10-01"),
    gross: 1200,
  };

  const payslip = calculatePayslip(salary);

  expect(payslip.salary).toEqual(salary);
  expect(payslip.deductions.size).toBe(5);
  expect(payslip.totalDeductions).toBeCloseTo(149.16, 2);
  expect(payslip.net).toBeCloseTo(1050.84, 2);
})

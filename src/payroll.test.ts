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
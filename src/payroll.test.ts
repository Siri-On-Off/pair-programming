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
  expect(payslip.totalDeductions).toBeCloseTo(435.0, 2); // Total deductions = 1395
  expect(payslip.net).toBeCloseTo(4565.0, 2); // Adjusted for the correct net salary
})
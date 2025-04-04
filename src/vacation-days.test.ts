import { calculateProRataVacationDays, Employment } from "./vacation-days";

test("full year 100% employment gives all vacation days", () => {
  // Arrange
  const fullTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-12-31 23:59:59+01:00")),
    percentage: 100,
    vacationDays: 25,
  };
  const expected = 25;

  // Act
  const actual = calculateProRataVacationDays(fullTime);

  // Assert
  expect(actual).toBe(expected);
});

test("full leap year 100% employment gives all vacation days", () => {
  // Arrange
  const fullTime: Employment = {
    startDate: new Date(Date.parse("2024-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2024-12-31 23:59:59+01:00")),
    percentage: 100,
    vacationDays: 25,
  };
  const expected = 25;

  // Act
  const actual = calculateProRataVacationDays(fullTime);

  // Assert
  expect(actual).toBe(expected);
});

test("full year 60% employment gives 15 vacation days", () => {
  // Arrange
  const partTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-12-31 23:59:59+01:00")),
    percentage: 60,
    vacationDays: 25,
  };
  const expected = 15;

  // Act
  const actual = calculateProRataVacationDays(partTime);

  // Assert
  expect(actual).toBe(expected);
});

test("46 days 100% employment gives 4 vacation days", () => {
  // Arrange
  const fullTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-02-15 23:59:59+01:00")),
    percentage: 100,
    vacationDays: 25,
  };
  const expected = 4;

  // Act
  const actual = calculateProRataVacationDays(fullTime);

  // Assert
  expect(actual).toBe(expected);
});


test("leap year 60 days 100% employment gives 5 vacation days", () => {
  // Arrange
  const partTime: Employment = {
    startDate: new Date(Date.parse("2024-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2024-02-29 23:59:59+01:00")),
    percentage: 100,
    vacationDays: 25,
  };
  const expected = 5;

  // Act
  const actual = calculateProRataVacationDays(partTime);

  // Assert
  expect(actual).toBe(expected);
});

test("90 days 70% employment gives 5 vacation days", () => {
  // Arrange
  const partTime: Employment = {
    startDate: new Date(Date.parse("2025-01-01 00:00:00+01:00")),
    untilDate: new Date(Date.parse("2025-03-31 23:59:59+01:00")),
    percentage: 70,
    vacationDays: 25,
  };
  const expected = 5;

  // Act
  const actual = calculateProRataVacationDays(partTime);

  // Assert
  expect(actual).toBe(expected);
});


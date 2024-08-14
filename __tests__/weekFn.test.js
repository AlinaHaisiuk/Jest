const weekFn = require("../tasks/taskWeek");

describe("weekFn", () => {
  test("returns `Понеділок`", () => {
    expect(weekFn(1)).toBe(`Понеділок`);
  });
  test("returns `Вівторок`", () => {
    expect(weekFn(2)).toBe(`Вівторок`);
  });
  test("returns `Середа`", () => {
    expect(weekFn(3)).toBe(`Середа`);
  });
  test("returns `Четвер`", () => {
    expect(weekFn(4)).toBe(`Четвер`);
  });
  test("returns `П'ятниця`", () => {
    expect(weekFn(5)).toBe(`П'ятниця`);
  });
  test("returns `Субота`", () => {
    expect(weekFn(6)).toBe(`Субота`);
  });
  test("returns `Неділя`", () => {
    expect(weekFn(7)).toBe(`Неділя`);
  });
  test("returns null for invalid numbers", () => {
    expect(weekFn(0)).toBeNull();
    expect(weekFn(8)).toBeNull();
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
  });

  test("returns null for non-numeric inputs", () => {
    expect(weekFn("2")).toBeNull();
    expect(weekFn(true)).toBeNull();
    expect(weekFn(null)).toBeNull();
    expect(weekFn(undefined)).toBeNull();
  });
});

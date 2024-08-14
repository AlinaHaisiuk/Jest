const ageClassification = require("../tasks/taskAge");

describe("ageClassification", () => {
  test("returns null for negative numbers", () => {
    expect(ageClassification(-1)).toBeNull();
  });
  test("returns `Дитинство` for ages 0 to 24", () => {
    expect(ageClassification(0)).toBe(`Дитинство`);
    expect(ageClassification(24)).toBe(`Дитинство`);
  });
  test("returns `Молодість` for ages 24.01 to 44", () => {
    expect(ageClassification(24.01)).toBe(`Молодість`);
    expect(ageClassification(44)).toBe(`Молодість`);
  });
  test("returns `Зрілість` for ages 44.01 to 65", () => {
    expect(ageClassification(44.01)).toBe(`Зрілість`);
    expect(ageClassification(65)).toBe(`Зрілість`);
  });
  test("returns `Старість` for ages 65.01 to 75", () => {
    expect(ageClassification(65.01)).toBe(`Старість`);
    expect(ageClassification(75)).toBe(`Старість`);
  });
  test("returns `Довголіття` for ages 75.01 to 90", () => {
    expect(ageClassification(75.01)).toBe(`Довголіття`);
    expect(ageClassification(90)).toBe(`Довголіття`);
  });
  test("returns `Рекорд` for ages 90.01 to 122", () => {
    expect(ageClassification(90.01)).toBe(`Рекорд`);
    expect(ageClassification(122)).toBe(`Рекорд`);
  });
  test("returns null for ages 122.01", () => {
    expect(ageClassification(122.01)).toBeNull();
  });
  test("returns null for ages 150", () => {
    expect(ageClassification(150)).toBeNull();
  });
});

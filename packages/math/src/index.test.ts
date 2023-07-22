import { divide, multiply, subtract, sum } from ".";

describe("math", () => {
  it("sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("multiply", () => {
    expect(multiply(1, 2)).toBe(2);
  });
  it("divide", () => {
    expect(divide(1, 2)).toBe(0.5);
  });
  it("subtract", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
})
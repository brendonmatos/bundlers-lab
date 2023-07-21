import calculateForce from "./force";

describe("force", () => {
  it("should be true", () => {
    expect(calculateForce(10, 0.2)).toBe(2);
  });
})
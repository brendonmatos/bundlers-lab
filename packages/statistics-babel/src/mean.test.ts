import calculateMean from "./mean";

describe("mean", () => {
  it("should be true", () => {
    expect(calculateMean([2, 3, 4])).toBe(3);
  });
})
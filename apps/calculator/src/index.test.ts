// import 

import { calculate } from ".";

describe("calculator", () => {
  it("should be equal", () => {
    expect(calculate()).toBe(`Force: 50, Mean: 3`)
  });
})
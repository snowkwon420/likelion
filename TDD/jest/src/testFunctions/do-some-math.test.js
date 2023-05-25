import { sum, substract, multiply, divide } from "../myFunctions/do-some-math";

describe("Math functions test ", () => {
  it("두 가지 값을 더합니다.", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sume()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it("두가지 값을 뺍니다.", () => {
    expect(sub());
  });
});

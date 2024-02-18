import sum from "../src/utils/sum";

it("Sum function should caculate the sum of two numbers11", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBeCloseTo(7);
});

describe("test suit", () => {
  it("normal", () => {
    expect("AA").toBeTruthy();
  });

  describe("nested test suit", () => {
    it("nested normal", () => {
      expect("AA").toBeTruthy();
    });
  });
});

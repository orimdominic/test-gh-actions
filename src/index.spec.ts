import { add } from "./index";

describe("add", () => {
  test("it returns the sum of two integers", () => {
    expect(add(1, 3)).toBe(4);
  });
});

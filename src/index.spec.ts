import { add, concatStr } from "./index";

describe("add", () => {
  test("it returns the sum of two integers", () => {
    expect(add(1, 3)).toBe(4);
  });
});

describe("concatStr", () => {
  test("it returns the concatenation of two strings", () => {
    expect(concatStr("hello", "world")).toBe("helloworld");
  });
});

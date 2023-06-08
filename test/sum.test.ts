import { sum } from "../src/index";

test("Test sum", () => {
  const actual = sum(1, 2);
  expect(actual).toBe(3);
});

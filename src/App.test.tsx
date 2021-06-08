import { calc } from "./App"

test("addition", () => {
  expect(calc("1 + 1")).toBe(2)
})

test("subtraction", () => {
  expect(calc("2 - 1")).toBe(1)
})

test("multiplication", () => {
  expect(calc("2 * 2")).toBe(4)
})

test("division", () => {
  expect(calc("6 / 2")).toBe(3)
})

test("empty query", () => {
  expect(calc("")).toBe(undefined)
})

test("non string", () => {
  expect(calc(11)).toBe(undefined)
})
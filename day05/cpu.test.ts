import {execFancy, execSimple} from "./cpu"

const tape = "0\n3\n0\n1\n-3".split("\n")

test("cpu example (simple)", () => {
    expect(execSimple(tape)).toBe(5)
})

test("cpu example (fancy)", () => {
    expect(execFancy(tape)).toBe(10)
})

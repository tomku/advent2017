import {largest, run} from "./registers"

test("simple example of instructions", () => {
    const instr = "b inc 5 if a > 1\na inc 1 if b < 5\nc dec -10 if a >= 1\nc inc -20 if c == 10\n"
    const result = run(instr)

    expect(largest(result.regs).value).toBe(1)
})

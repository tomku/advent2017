import {cyclesToBalance} from "./balance"

test("memory block balancing example", () => {
    expect(cyclesToBalance("0\t2\t7\t0").cycles).toBe(5)
})

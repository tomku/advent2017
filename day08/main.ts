import {getInput} from "../utils/input"
import {largest, run} from "./registers"

const puzzle = getInput(__dirname)
const result = run(puzzle)
const big = largest(result.regs)

console.log("Largest register: " + big.key + ": " + big.value)
console.log("Largest ever: " + result.biggest)

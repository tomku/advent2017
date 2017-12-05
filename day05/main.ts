import {getInputSplit} from "../utils/input"
import {execFancy, execSimple} from "./cpu"

const puzzle = getInputSplit(__dirname)

console.log(execSimple(puzzle) + " steps taken with simple jumps")
console.log(execFancy(puzzle) + " steps taken with fancy jumps")

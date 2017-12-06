import {getInput} from "../utils/input"
import {cyclesToBalance} from "./balance"

const puzzle = getInput(__dirname)

const answer = cyclesToBalance(puzzle)
console.log(answer.cycles + " cycles")
console.log("Last saw " + answer.loopLength + " cycles ago")

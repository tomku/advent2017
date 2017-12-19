import {getInput} from "../utils/input"
import {countGarbage, score} from "./stream"

const puzzle = getInput(__dirname)

console.log("score: " + score(puzzle))
console.log("garbage characters: " + countGarbage(puzzle))

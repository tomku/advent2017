import {getInput} from "../utils/input"
import {minmaxChecksum, quotChecksum} from "./corruption"

const puzzle = getInput(__dirname)

console.log("First spreadsheet checksum: " + minmaxChecksum(puzzle))
console.log("Second spreadsheet checksum: " + quotChecksum(puzzle))

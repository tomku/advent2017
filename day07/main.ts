import {getInput} from "../utils/input"
import {bottom, createTower, fixWrongWeight} from "./discs"

const puzzle = getInput(__dirname)
const tower = createTower(puzzle)
console.log(bottom(tower))

console.log(fixWrongWeight(tower, bottom(tower)))

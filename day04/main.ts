import * as fs from "fs"
import {getInputSplit} from "../utils/input"
import {countNonAnagrams, countUnique} from "./passphrases"

const puzzle = getInputSplit(__dirname)

console.log("Passphrases composed of unique words: " + countUnique(puzzle))
console.log("Passphrases with no anagrams: " + countNonAnagrams(puzzle))

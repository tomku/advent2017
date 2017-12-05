import * as fs from "fs";
import {countNonAnagrams, countUnique} from "./passphrases";

const puzzle = fs.readFileSync("day04/input.txt")
    .toString()
    .split("\n")
    .filter((line) => !(/^$/.test(line)));

console.log("Passphrases composed of unique words: " + countUnique(puzzle));
console.log("Passphrases with no anagrams: " + countNonAnagrams(puzzle));

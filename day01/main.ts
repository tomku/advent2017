import {getInputSplit} from "../utils/input"
import {complexCaptcha, simpleCaptcha} from "./captcha"

const puzzle = getInputSplit(__dirname)[0]

console.log("First captcha: " + simpleCaptcha(puzzle))
console.log("Second captcha: " + complexCaptcha(puzzle))

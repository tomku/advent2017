import * as fs from "fs"
import * as path from "path"

function getInput(dir: string): string {
    return fs.readFileSync(path.join(dir, "input.txt")).toString()
}

function getInputSplit(dir: string) {
    return getInput(dir).split("\n").filter((line) => !(/^$/.test(line)))
}
export {getInputSplit, getInput}

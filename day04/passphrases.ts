function countUnique(lines: string[]): number {
    return lines.map((line) => {
        const words = line.trim().split(/\s+/)
        return +(words.length === (new Set(words)).size)
    }).reduce((x, y) => x + y)
}

function sortChars(s: string): string {
    const a = Array.from(s)
    a.sort()
    return a.join("")
}

function countNonAnagrams(lines: string[]): number {
    return lines.map((line) => {
        const words = line.trim().split(/\s+/)
        return +(words.length === (new Set(words.map(sortChars))).size)
    }).reduce((x, y) => x + y)
}

export {countUnique, countNonAnagrams}

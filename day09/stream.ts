interface IToken {
    type: string
    contents: string
}

function skipGarbage(input: string): number {
    let skipped = 1
    while (skipped < input.length) {
        if (input[skipped] === "!") {
            skipped += 2
        } else if (input[skipped] === ">") {
            skipped += 2
            break
        } else {
            skipped += 1
        }
    }
    return skipped - 1
}

function lex(input: string): IToken[] {
    const output = []
    while (input !== "") {
        if (input.startsWith("{")) {
            output.push({type: "start", contents: null})
            input = input.slice(1)
        } else if (input.startsWith("}")) {
            output.push({type: "end", contents: null})
            input = input.slice(1)
        } else if (input.startsWith("!")) {
            input = input.slice(2)
        } else if (input.startsWith("<")) {
            const skip = skipGarbage(input)
            output.push({type: "garbage", contents: input.slice(1, skip - 1).replace(/!./g, "")})
            input = input.slice(skip)
        } else if (input.startsWith(",")) {
            input = input.slice(1)
        } else if (/^\s+/.test(input)) {
            input = input.trim()
        }
    }
    return output
}

function countGarbage(input: string) {
    return lex(input).reduce(
        (count: number, next: IToken) => next.type === "garbage" ? count + next.contents.length : count,
        0,
    )
}

function score(input: string) {
    return lex(input).reduce((state: { score: number, level: number }, next: IToken) => {
            if (next.type === "start") {
                return {score: state.score + state.level, level: state.level + 1}
            } else if (next.type === "end") {
                return {score: state.score, level: state.level - 1}
            } else {
                return state
            }
        }, {score: 0, level: 1},
    ).score
}

export {score, countGarbage}

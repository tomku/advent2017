function step(mem: number[], ip: number, transform: (n: number) => number): number {
    const off = mem[ip]
    mem[ip] = transform(off)
    return ip + off
}

function done(mem: number[], ip: number): boolean {
    return mem[ip] === undefined
}

function exec(tape: string[], transform: (n: number) => number): number {
    let steps = 0
    let ip = 0
    const mem = tape.map((line) => parseInt(line, 10))

    while (!done(mem, ip)) {
        ip = step(mem, ip, transform)
        steps++
    }

    return steps
}

function execSimple(tape: string[]) {
    return exec(tape, (n) => n + 1)
}

function execFancy(tape: string[]) {
    return exec(tape, (n) => n >= 3 ? n - 1 : n + 1)
}

export {execSimple, execFancy}

function biggestBank(mem: number[]): number {
    let biggest = 0
    for (let i = 0; i < mem.length; i++) {
        biggest = mem[i] > mem[biggest] ? i : biggest
    }
    return biggest
}

function distribute(mem: number[], i: number, blocks: number): void {
    while (blocks > 0) {
        blocks--
        i = (i + 1) % mem.length
        mem[i] += 1
    }
}

function parseTape(s: string): number[] {
    return s.trim().split(/\s+/).map((x) => parseInt(x, 10))
}

function cyclesToBalance(tape: string): {cycles: number, duplicate: number[], loopLength: number} {
    const mem = parseTape(tape)
    const seen: Map<string, number> = new Map()
    let cycles = 0

    do {
        seen.set(mem.toString(), cycles)
        const i = biggestBank(mem)
        const blocks = mem[i]
        mem[i] = 0
        distribute(mem, i, blocks)
        cycles++
    } while (!seen.has(mem.toString()))

    return {cycles, duplicate: mem, loopLength: cycles - seen.get(mem.toString())}
}

export {cyclesToBalance}

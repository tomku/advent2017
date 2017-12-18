type Registers = Map<string, number>
type Predicate = (Registers) => boolean
type Step = (Registers) => void

interface Instruction { exec: Step, pred: Predicate }

function lookup(regs: Registers, v: string): number {
    return regs.has(v) ? regs.get(v) : 0
}

const operators = {
    dec: (x, y) => x - y,
    inc: (x, y) => x + y,
}

const predicates = {
    "!=": (x, y) => x !== y,
    "<":  (x, y) => x <   y,
    "<=": (x, y) => x <=  y,
    "==": (x, y) => x === y,
    ">":  (x, y) => x >   y,
    ">=": (x, y) => x >=  y,
}

function makeOp(code: string, reg: string, arg: number): Step {
    return (regs: Registers) => regs.set(reg, operators[code](lookup(regs, reg), arg))
}

function makePred(code: string, reg: string, arg: number): Predicate {
    return (regs: Registers) => predicates[code](lookup(regs, reg), arg)
}

function parse(instr: string): Instruction {
    const [opStr, predStr] = instr.split(/\s+if\s+/)
    const [opReg, opCode, opArg] = opStr.split(/\s+/)
    const [predReg, predOp, predArg] = predStr.split(/\s+/)
    return {
        exec: makeOp(opCode, opReg, parseInt(opArg, 10)),
        pred: makePred(predOp, predReg, parseInt(predArg, 10)),
    }
}

function run(instr: string): {biggest: number, regs: Registers} {
    const regs = new Map()
    const ops = instr.trim().split("\n").map(parse)
    let biggest = -Infinity

    for (const op of ops) {
        if (op.pred(regs)) {
            op.exec(regs)
            biggest = Math.max(biggest, ...regs.values())
        }
    }
    return {biggest, regs}
}

function biggerSize({key, value}, [k, v]): { key: any; value: number } {
    return v > value ? {key: k, value: v} : {key, value}
}

function largest(regs: Map<string, number>): {key: string, value: number} {
    const entries = Array.from(regs.entries())
    return entries.reduce(biggerSize, {key: "", value: -Infinity})
}

export {largest, run}

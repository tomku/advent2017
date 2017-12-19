// TODO: Make less garbage.

interface IProgram {
    name: string
    weight: number,
    children: string[]
}

type Tower = Map<string, IProgram>

function parent(nodes: Tower, current: string): string {
    for (const n of nodes.values()) {
        if (n.children.indexOf(current) !== -1) {
            return n.name
        }
    }
}

function bottom(nodes: Tower): string {
    const current = nodes.keys().next().value
    let p = current
    let last = p
    while (p !== undefined) {
        last = p
        p = parent(nodes, last)
    }
    return last
}

function createTower(input: string): Tower {
    const nodes: Tower = new Map()
    const lines = input.trim().split("\n")
    const matches = lines.map((l) => /(\w+)\s+\((\d+)\)(?:\s+->\s+(.*))?/.exec(l))

    for (const m of matches) {
        const children = m[3] ? m[3].split(",").map((s) => s.trim()) : []
        nodes.set(m[1], {
            children,
            name: m[1],
            weight: parseInt(m[2], 10),
        })
    }

    return nodes
}

function weight(tower: Tower, current: string): number {
    const c = tower.get(current)
    return c.weight + c.children.map((n) => weight(tower, n)).reduce((x, y) => x + y, 0)
}

function balanced(tower: Tower, current: string): boolean {
    const c = tower.get(current)
    if (c.children === []) {
        return true
    } else {
        const weights = c.children.map((n) => weight(tower, n))
        return weights.map((x) => x === weights[0]).reduce((x, y) => x && y)
    }
}

function argmax(nums: number[]): number {
    let m = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[m] < nums[i]) {
            m = i
        }
    }
    return m
}

function fixWrongWeight(tower: Tower, current: string): number {
    const c = tower.get(current)
    const weights = c.children.map((n) => Object.assign({totalWeight: weight(tower, n)}, n))
    const avg = weights.map((x) => x.totalWeight).reduce((x, y) => x + y) / c.children.length
    const devs = weights.map((x) => Math.abs(x.totalWeight - avg))
    const outlier = argmax(devs)
    const normal = (outlier + 1) % c.children.length

    if (balanced(tower, c.children[outlier])) {
        return tower.get(c.children[outlier]).weight - (weights[outlier].totalWeight - weights[normal].totalWeight)
    } else {
        return fixWrongWeight(tower, c.children[outlier])
    }
}

export {createTower, bottom, fixWrongWeight}

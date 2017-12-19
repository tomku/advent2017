import {bottom, createTower, fixWrongWeight} from "./discs"

test("example discs", () => {
    const input =
        "pbga (66)\nxhth (57)\nebii (61)\nhavc (66)\nktlj (57)\nfwft (72) -> ktlj, cntj, xhth\n" +
        "qoyq (66)\npadx (45) -> pbga, havc, qoyq\ntknk (41) -> ugml, padx, fwft\njptl (61)\n" +
        "ugml (68) -> gyxo, ebii, jptl\ngyxo (61)\ncntj (57)"

    const tower = createTower(input)
    const bot = bottom(tower)
    expect(bot).toBe("tknk")

    expect(fixWrongWeight(tower, bot)).toBe(60)
})

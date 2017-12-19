import {countGarbage, score} from "./stream"

test("scoring streams", () => {
    expect(score("{}")).toBe(1)
    expect(score("{{{}}}")).toBe(6)
    expect(score("{{},{}}")).toBe(5)
    expect(score("{{{},{},{{}}}}")).toBe(16)
    expect(score("{<a>,<a>,<a>,<a>}")).toBe(1)
    expect(score("{{<ab>},{<ab>},{<ab>},{<ab>}}")).toBe(9)
    expect(score("{{<!!>},{<!!>},{<!!>},{<!!>}}")).toBe(9)
    expect(score("{{<a!>},{<a!>},{<a!>},{<ab>}}")).toBe(3)
})

test("counting garbage in streams", () => {
    expect(countGarbage("<>")).toBe(0)
    expect(countGarbage("<random characters>")).toBe(17)
    expect(countGarbage("<<<<>")).toBe(3)
    expect(countGarbage("<{!>}>")).toBe(2)
    expect(countGarbage("<!!>")).toBe(0)
    expect(countGarbage("<!!!>>")).toBe(0)
    expect(countGarbage("<{o\"i!a,<{i<a>")).toBe(10)
})

import {spiralDistance} from "./spiral";

test("spiral distance examples", () => {
    expect(spiralDistance(1)).toBe(0);
    expect(spiralDistance(2)).toBe(1);
    expect(spiralDistance(5)).toBe(2);
    expect(spiralDistance(6)).toBe(1);
    expect(spiralDistance(9)).toBe(2);
    expect(spiralDistance(10)).toBe(3);
    expect(spiralDistance(12)).toBe(3);
    expect(spiralDistance(14)).toBe(3);
    expect(spiralDistance(17)).toBe(4);
    expect(spiralDistance(19)).toBe(2);
    expect(spiralDistance(22)).toBe(3);
    expect(spiralDistance(23)).toBe(2);
    expect(spiralDistance(47)).toBe(4);
    expect(spiralDistance(1024)).toBe(31);
    expect(spiralDistance(368078)).toBe(371);
});

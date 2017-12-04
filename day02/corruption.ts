function checksum(sheet: string): number {
    const rows = sheet.split("\n")
        .map((line) => line.trim().split(/\s+/).map((val) => +val));
    return rows.map(rowDiff).reduce((x, y) => x + y);
}

interface IMinMaxPair { min: number; max: number; }

function rowDiff(row: [number]): number {
    const minmax = row.reduce(
        (acc: IMinMaxPair, x: number) => ({min: Math.min(acc.min, x), max: Math.max(acc.max, x)}),
        {min: Infinity, max: -Infinity});
    return minmax.max - minmax.min;
}

export {checksum};

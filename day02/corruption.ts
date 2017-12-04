function checksum(rowCallback: (row: [number]) => number): (sheet: string) => number {
    return (sheet: string): number => {
        const rows = sheet.split("\n")
            .map((line) => line.trim().split(/\s+/).map((val) => +val));
        return rows.map(rowCallback).reduce((x, y) => x + y);
    };
}

const minmaxChecksum: (sheet: string) =>
    number = checksum(rowDiff);

interface IMinMaxPair {
    min: number;
    max: number;
}

function rowDiff(row: [number]): number {
    const minmax = row.reduce(
        (acc: IMinMaxPair, x: number) => ({min: Math.min(acc.min, x), max: Math.max(acc.max, x)}),
        {min: Infinity, max: -Infinity});
    return minmax.max - minmax.min;
}

function findDivisible(row: [number]): number {
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < row.length; j++) {
            if (row[i] % row[j] === 0 && i !== j) {
                return (row[i] / row[j]);
            }
        }
    }

    return 0;
}

const quotChecksum: (sheet: string) => number = checksum(findDivisible);

export {minmaxChecksum, quotChecksum};

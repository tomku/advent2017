function rings(n: number): number[] {
    const out = [1];
    let i = 1;
    while (i * i < n) {
        out.push(i);
        i += 2;
    }
    out.push(i);
    out.reverse();
    return out;
}

function spiralDistanceRec(n: number): number {
    if (n < 2) {
        return 0;
    }

    // `rings` is an array of the square roots of diagonal values of the spiral, in reverse order.
    const ring = rings(n);
    // The square roots are the number of elements in a side of the spiral, and the squares are the
    // largest element in each concentric ring.  We want both.
    const square = ring.map((x) => x * x);
    // The smallest value in each ring is one more than the largest in the previous ring.
    const min = square[1] + 1;
    // It's useful to have our number's ordinal position in its ring.
    const ord = n - min + 1;

    // Are we at a corner or the first entry of the ring?
    if (ord % (ring[0] - 1) === 0 || ord === 1) {
        // If so, moving exactly one number lower is always optimal.
        return n - 1;
    }

    // Otherwise we move one space directly towards the center, which depends which quadrant of the spiral we're in.
    const q = Math.floor(ord / (ring[0] - 1));

    // We decrement by at least the difference between largest elements in the previous two rings...
    const delta = square[1] - square[2] + 1;

    // ...and we decrement two more times for each corner we pass.
    return n - (delta + q * 2);
}

// Trampoline for spiralDistanceRec.
function spiralDistance(n: number): number {
    let dist = 0;

    while (n >= 2) {
        n = spiralDistanceRec(n);
        dist++;
    }

    return dist;
}

export {spiralDistance};

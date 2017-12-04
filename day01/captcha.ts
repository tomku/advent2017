function captcha(s: string) {
    let total = 0;
    const wrapped = s + s.charAt(0);

    for (let i: number = 0; i < wrapped.length - 1; i++) {
        if (wrapped.charAt(i) === wrapped.charAt(i + 1)) {
            total += +wrapped.charAt(i);
        }
    }

    return total;
}

export { captcha} ;

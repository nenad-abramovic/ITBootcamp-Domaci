for (let i = 1; i <= 100; i++) {
    let ispis = '';
    if (i % 3 == 0)
        ispis += 'Fizz';
    if (i % 5 == 0)
        ispis += 'Buzz';
    if (i % 7 == 0)
        ispis += 'Zazz';
    if (i % 13 == 0)
        ispis += 'Pezz';
    if (ispis == '')
        ispis = i;
    console.log(ispis)
}

function mostSpokenLanguages(countries, n) {
    let arr = Array.from(countries).map(obj => Object.entries(obj)[0]);
    arr.sort((a, b) => b[1] - a[1]);
    return arr.slice(0, n).map(([lang, count]) => ({ [lang]: count }));
}
let countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
]);

console.log(mostSpokenLanguages(countries, 3));

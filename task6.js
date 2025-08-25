function afterNYears(people, n) {
  n = Math.abs(n);
  let result = {};
  for (let key in people) {
    result[key] = people[key] + n;
  }
  return result;
}
console.log(afterNYears({
  "Joel": 32,
  "Fred": 44,
  "Reginald": 65,
  "Susan": 33,
  "Julian": 13
}, 1));

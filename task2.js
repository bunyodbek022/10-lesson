function getTopStudents(set) {
    let averages = {};
    let maxAvg = 0;
    for (let obj of set) {
        let avg = obj.scores.reduce((a, b) => a + b, 0) / obj.scores.length;
        averages[obj.name] = avg;
        if (avg > maxAvg) {
            maxAvg = avg;
        }
    }
    let topStudents = [];
    for (let name in averages) {
        if (averages[name] === maxAvg) {
            topStudents.push({ name, average: averages[name] });
        }
    }

    return {topStudents};
    
}
const students = new Set([
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
]);

console.log(getTopStudents(students));

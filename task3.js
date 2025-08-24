function maxAverage(employees) {
    if (employees.size === 0) {
        return "Setni malumot bilan to'ldiring";
    }
    let departments = {};
    for (let emp of employees) {
        if (!departments[emp.department]) {
            departments[emp.department] = { total: 0, count: 0 };
        }
        departments[emp.department].total += emp.salary;
        departments[emp.department].count++;
    }
    let maxAvg = 0;
    let topDepartment = "";
    for (let dep in departments) {
        let avg = departments[dep].total / departments[dep].count;
        if (avg > maxAvg) {
            maxAvg = avg;
            topDepartment = dep;
        }
    }
    return { department: topDepartment, average: Math.floor(maxAvg) };
}

const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
]);

console.log(maxAverage(employees));

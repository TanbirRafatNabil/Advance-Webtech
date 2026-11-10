const name = "Nabil";
let marks = [60, 75, 40, 85];


function getTotal(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    return sum;
}

function getAverage(marks) {
    let total = getTotal(marks);
    return total / marks.length;
}

function getGrade(avg) {
    if (avg >= 80) {
        return "A";
    } else if (avg >= 60) {
        return "B";
    } else if (avg >= 50) {
        return "C";
    } else {
        return "F";
    }
}

function getResult(avg) {
    if (avg >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function findHighestMark(marks) {
    let max = marks[0];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > max) {
            max = marks[i];
        }
    }
    return max;
}

function countPassedSubjects(marks) {
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count = count + 1;
        }
    }
    return count;
}

let total = getTotal(marks);
let avg = getAverage(marks);
let grade = getGrade(avg);
let result = getResult(avg);
let highest = findHighestMark(marks);
let passed = countPassedSubjects(marks);

console.log("Name:", name);
console.log("Marks:", marks);
console.log("Total:", total);
console.log("Average:", avg);
console.log("Grade:", grade);
console.log("Result:", result);
console.log("Highest Mark:", highest);
console.log("Passed Subjects:", passed);
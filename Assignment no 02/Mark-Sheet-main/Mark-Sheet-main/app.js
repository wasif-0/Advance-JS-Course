let english = +prompt("Enter English marks out of 100");
let math = +prompt("Enter Math marks out of 100");
let science = +prompt("Enter Science marks out of 100");
let computer = +prompt("Enter Computer marks out of 100");;

const totalMarks = 400;

let obtainedMarks = english + math + science + computer;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade;
if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "F";
}

document.write(`
    <h2>Mark Sheet</h2>
    <p><strong>English:</strong> ${english}</p>
    <p><strong>Math:</strong> ${math}</p>
    <p><strong>Science:</strong> ${science}</p>
    <p><strong>Computer:</strong> ${computer}</p>
    <p><strong>Total Marks:</strong> ${totalMarks}</p>
    <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
    <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
    <p><strong>Grade:</strong> ${grade}</p>
`);

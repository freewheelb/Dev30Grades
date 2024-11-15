// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

// The the Floor method takes the number generated by Math.random and rounds it down to an integer.
// This is multipled by 100 to generate a grade from 1 - 100
var testGrade = Math.floor(Math.random() * 100);

console.log(testGrade);

if (testGrade >= 0 && testGrade <= 65) {
    console.log('Grade: F');
}
else if (testGrade >= 66 && testGrade < 71) {
    console.log('Grade: D');
}
else if (testGrade >= 71 && testGrade < 80) {
    console.log('Grade: C');
}
else if (testGrade >= 80 && testGrade < 90) {
    console.log('Grade: B');
}
else if (testGrade >= 90) {
    console.log('Grade: A');
}

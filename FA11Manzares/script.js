let A = parseFloat(prompt("Enter the length of side #1", ""));
let B = parseFloat(prompt("Enter the length of side #2", ""));
let C = parseFloat(prompt("Enter the length of side #3", ""));

function determineTriangle(a, b, c) {
    if (a == b && a == c) {
        alert("The triangle is EQUILATERAL");
    } else if ((a == b && b != c) || (b == c && b != a) || (a == c && b != c)) {
        alert("The triangle is ISOCELES");
    } else {
        alert("The triangle is SCALENE");
    }
}
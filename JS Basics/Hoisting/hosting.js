console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 50



console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
console.log(z); // Output: 15



Function:


console.log(sum(2, 3)); // Output: 5

function sum(a, b) {
    return a + b;
}


console.log(add(2, 3)); // TypeError: add is not a function
var add = function (a, b) {
    return a + b;
};



console.log(multiply(2, 3)); // ReferenceError: Cannot access 'multiply' before initialization
let multiply = function (a, b) {
    return a + b;
};

console.log(divide(2, 3)); // ReferenceError: Cannot access 'divide' before initialization
const divide = function (a, b) {
    return a / b;
};
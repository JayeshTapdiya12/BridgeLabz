// es 6:

// let const

let count = 0;
const max = 5;

while (count < max) {
    console.log(count);
    count++;
}

// spread operator 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2);

// destrutctuing 
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// template string
const name = 'Jayesh';
const age = 22;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);


// default parameter
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('Jayesh');







// es 7:


// iclude :The includes() method is used to determine whether an array contains a specified value. If it does, it returns true, otherwise it returns false

const fruits = ['apple', 'banana', 'mango', 'orange'];

console.log(fruits.includes('banana'));
console.log(fruits.includes('grape'));


// es 8 :
let no = [1, 2, 3, 4, 5, 6];

let me = ["jayesh", "tapdiya", "medicaps", "3rd yr"];

// reduce methods

// let me2 = no.reduce((acc, crr) => acc + crr, 0);
// console.log(me2)

//  Map method :


// let no2 = no.map((num) => num * 2);
// console.log(no2)

let no3 = no.map((num) => {
    if (num % 2 == 0) {
        return num * 3;
    }
    else {
        return num;
    }
})
console.log(no3)


//  sort methods:

let me3 = me.sort()
console.log(me3)

let no4 = no3.sort()
console.log(no4)
// sort in no ?

// filter :

let me4 = me.filter((word) => word.length >= 7);
console.log(me4)


const big = (value) => {
    if (value <= 5) {
        return value

    }
}
let no5 = no.filter(big)
console.log(no5)
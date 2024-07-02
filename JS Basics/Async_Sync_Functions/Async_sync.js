// synchronous  1 eg :
console.log("hello")
const test = () => {
    console.log("hello from fn")
}
test()
console.log("hello")


// eg 2

console.log("hello")
function hello(a) {
    console.log("helllo", a)
}
let a = "hello form a"
hello(a);

// eg 3:

console.log("eg 3")
const hello = () => {
    console.log("object")
}
const hi = (a) => {
    a()
}
hi(hello)



// async  1 eg :

console.log("hi")
setTimeout(() => {
    console.log("hello from fn")
}, 1000);
console.log("hello")

// eg 2:
console.log("hello");

const fun1 = () => {
    setTimeout(() => {
        console.log("inside setimeout")
    }, 1000)

}
const fun = (a) => {
    a()
}
fun(fun1)


// eg3 :
const fun3 = () => {
    setTimeout(() => {
        console.log("insinde fun3")
    })
    console.log("fun3")
}
console.log("hello from outside fun 3")

fun3()


// 
// async and wait
async function weather() {
    let delhi = new Promise((resolve, reject) => {

        setTimeout(
            () => (resolve("27 Deg")), 2000)
    })

    let indore = new Promise((resolve, reject) => {

        setTimeout(
            () => (resolve("21 Deg")), 7000)
    })

    console.log("fectching indore weather")
    let indorew = await indore;
    console.log("fectched indore weather", indorew)


    console.log("fectching delhi weather")
    let delhiw = await delhi;
    console.log("fectched delhi weather", delhiw)

    // console.log("fectching indore weather")
    // let indorew = await indore;
    // console.log("fectched indore weather",indorew)
    return [delhiw, indorew];
}
console.log("the weather of city")
let abb = weather();
console.log(abb);


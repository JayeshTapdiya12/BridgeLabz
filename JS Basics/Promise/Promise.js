// promise in js

// let promise = new Promise((resolve, reject) => {
//     console.log("hello i am a new promise");
//     resolve(56);
// })

// console.log("hello world1")
// // time out function
// const myFun = ()=>{
//     console.log("hello world2");
// }
// setTimeout(myFun,1000);

// console.log("hello world3")
// console.log(promise)



let p1 = new Promise((resolve, reject) => {
    console.log("p1 is pending")
    let x = 5;
    if (x >= 0) {
        setTimeout(() => { resolve("ok") }, 1000);
    } else {
        reject("error");
    }
});


let p2 = new Promise((resolve, reject) => {
    console.log("p2 is pending")
    let x = 5;
    if (x <= 0) {
        setTimeout(() => { resolve("ok") }, 1000);
    } else {
        reject(("error"));
    }
});


let p3 = new Promise((resolve, reject) => {
    console.log("p3 is pending")
    let x = 5;
    if (x >= 0) {
        setTimeout(() => { resolve(x) }, 1000);
    } else {
        reject(("error"));
    }
});


Promise.all([p1.catch(resolve1 => { return resolve1; }),
p2.catch(resolve2 => { return resolve2; }),
p3.catch(resolve3 => { return resolve3; })
]).then((resolve) => {
    console.log(resolve[0]);
    console.log(resolve[1]);
    console.log(resolve[2]);

}
    // ,(reject)=>{
    //     console.log(reject);
).catch((err) => {
    console.log("error found", err)
})


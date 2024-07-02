// eg 1:
function myFirst() {
    console.log("helo form myFirst");
}

function mySecond() {
    console.log("hello from mySecond");
}

myFirst();
mySecond();

// eg 2:
function myfunc2() {
    console.log("this is func2");
}
function myfunc3() {
    console.log("this is func3");
}

function func(a, b) {
    console.log("inside func1 ");
    a();
    b();
}
func(myfunc2, myfunc3);//we are passinf function as a agrument in the function

// eg 3:

const cal = (a, b) => {
    console.log(a + b);
}


cal(4, 5)

// eg:4

function myfunc2() {
    console.log("this is func2");
}
function myfunc3() {
    console.log("this is func3");
}

function func(a, b) {
    console.log("inside func1 ");
    setTimeout(() => {
        console.log("hrllo from set timeout")
    })
    a();
    b();
}
func(myfunc2, myfunc3);
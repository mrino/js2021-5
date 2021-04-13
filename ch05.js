// code 5-1
let fun = function(){
    console.log("첫번째 줄");
    console.log("두번째 줄");
}
fun();

console.log(fun);


// code5-2
function fun1(){
    console.log("첫번째 줄");
    console.log("두번째 줄");
}
fun1();

console.log(fun1);

// code 5-3

let fun2 = () => console.log("하하하")
fun2();
console.log(fun2);

let fun3 = function(){
    console.log("첫번째 줄");
    console.log("두번째 줄");
}
fun3();
console.log(fun3);

function power(x){
    let foo;
    foo = x * x;
    return foo;
}

console.log(power(10));
console.log(power(1000));

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


//함수의 기본형태
function power(x){
    let foo;
    foo = x * x;
    return foo;
}

console.log(power(10));
console.log(power(1000));


//변수가 여러 개인 함수
function multply(x,y){
    let foo;
    foo = x * y;
    return foo;
}

console.log(multply(3,4));
console.log(multply(4,2));

//리턴이 없는 함수
function doprint(message){
    console.log(`"${message}"(이)라고 말하셨습니다`);
}

doprint("안녕하세요");
doprint("감사해요");


//가우스 연산

function gaussum(min,max)
{
    let output = 0;
    for(let i = min; i <= max; i++)
    {
        output += i;
    }
    return output;
}

console.log(gaussum(1,100));




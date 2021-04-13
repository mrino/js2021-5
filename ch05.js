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

//함수 매개 변수 초기화
function dolog(name,count){
    console.log(`${name}(이)가 ${count}개 남았습니다`);
}
dolog("사과",3);
dolog("사과");


//함수 매개 변수 초기화
function dologver2(name,count){
    if(!count){
        count = 1;
    }
    console.log(`${name}(이)가 ${count}개 남았습니다`);
}
dologver2("사과",3);
dologver2("사과");

function dologver3(name,count){
    if(!count){
        console.log("죄송하지만 갯수가 입력이 안됬습니다. 다시 입력해주세요.");
        return 0;
    }
    console.log(`${name}(이)가 ${count}개 남았습니다`);
}
dologver3("사과",3);
dologver3("사과");

console.log("sdfsdf");

function dologver4(name="무명",count=1){
    if(!count){
        count = 1;
    }
    console.log(`${name}(이)가 ${count}개 남았습니다`);
}
dologver4("사과",3);
dologver4("사과");
dologver4();


// 콜백함수

function CallTenTimes(callback)
{
    for(let i = 0; i<10; i++)
    {
        callback();
    }
}

CallTenTimes(function ()
{
    console.log("함수호출중");
});
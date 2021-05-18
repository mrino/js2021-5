# 신동주 202030420 

><a herf="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects#%EA%B0%92_%EC%86%8D%EC%84%B1">모질라</a> 참고하면 좋은 곳

>git 관련 명령어 
>>git init: git을 생성한다.  
git commit -am [설명]: 저장과 동시에 커밋을 한다  
git push: 푸쉬한다.  

>node 관련
>>노드가 없으면 그냥 html에서 실행하면 된다.
* * *

## [05월 10일]

>배운 내용 

>예외 처리

기본 예외 처리: 조건문을 통해 예외 예방하기
고급 예외 처리: trycatch문을 통해 예외 처리하기

ch08.js에서 확인하기

trycatch

* * *
### 7장 끝!

>JSON의 제약

1. 문자열은 ""큰따옴표로 만들어야한다.
2. 모든 키는 ""큰따옴표로 감싸야한다.
3. 숫자, 문자열, 불 자료형만 사용할 수 있다.

>Array

Array 객체는 여러 자료를 다룰 때 사용하는 자료형이다.  
Array의 메서드는 push,pop부분의 설명되어있는 부분을 가져와 내용을 추가했다.

*push : 배열의 마지막 주소에 원하는 값을 추가하는 함수  
*pop : 배열의 마지막 주소에 있는 값을 제거해주는 함수  
shift : 배열의 첫번째 주소에 있는 값을 제거한 후 반환해주는 함수  
concat : 두 개의 배열을 합쳐주는 함수  
*reverse : 배열을 역순으로 재배열하는 함수
sort : 아스키코드로 배열을 정렬하는 함수  
*slice : 배열을 자르고 반환하는 함수  
splice :  배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.  
join : 배열값들 사이에 원하는 문자를 삽입하여 반환한다.

앞부분의 *있는것은 자기 자신을 변환 시킨다.

ECMASrcipt5에서 따로 추가된 메소드  
forEach: 배열의 요소를 하나씩 뽑아 반복을 돌린다.  
map: 콜백 함수에서 리턴하는 것을기반으로 새로운 배열을 만든다.  
filter: 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만든다.

또한 관련된 코드는 array.js 부분에 있다.

>Date

현재 시간을 나타내는 객체  
객체를 새성하는 방법은 4가지가 있다.
```js
//현재 시간으로 Date 객체 생성
let Date1 = new Date();
//유닉스 타임으로 date 객체를 생성
let Date2 = new Date(Number);
//문자열을 기반으로 Date 객체를 생성
let Date3 = new Date("Decmber 9, 1991, 21:30:00");
//시간 요소로 객체를 생성
let Date4 = new Date(1991, 12 -1, 9, 21 ,30, 0, 0);
```

Date 객체 메서드는 getㅇㅇ메서드와 setㅇㅇ형태의 메서드만을 가진다


## [05월 04일]

>배운 내용  

>String 

속성  
length: 문자열 길이를 나타낸다.  

메소드  
split메소드 한번 사용해보기  
너무 길어서 따로 적지 않으나 모질라 사이트 들어가서 참고하기

String객체를 사용할 때 주의해야할 점은  
String 객체 메소드는 모두 자기 자신을 변경하는 것이 아닌 변경된 값은 리턴 하는 것이다.  
```js
let str = "abcdefg";
//toUpperCase는 문자열을 대문자로 바꾸어 리턴하는 메소드다.
str.toUpperCase();
console.log(str);
```
그러니 이 코드의 출력 값은 대문자가 아닌 소문자로 출력이 된다
```js
let str = "abcdefg";
//toUpperCase는 문자열을 대문자로 바꾸어 리턴하는 메소드다.
str = str.toUpperCase();
console.log(str);
```
그러니 String의 메소드는 이런 식으로 사용해야 한다.


ch07.js참고

>Number

메소드  
toExponential: 숫자를 지수표시로 나타낸 문자열을 리턴한다.  
toFixed: 숫자를 고정소수점 표시로 나타낸 문자열을 리턴한다.  
toPrecision: 숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴한다.

속성  
MAX_VALUE: 자바 스크립트가 표시할 수 있는 최대 숫자  
MIN_VALUE: 자바 스크립트가 표시할 수 있는 최소 숫자  
NaN: 자바스크립트가 표시할 수 없는 숫자  
POSITIVE_INFINITY: 양의 무한대  
NEGATIVE_INFINITY: 음의 무한대  

ch07.js참고

>기본 자료형과 객체 자료형 차이

숫자, 문자, 불을 기본 자료형 이라고 이야기한다.
Number, Stirng, Boolen 생성자 함수로 생성하면 객체가 된다.  

기본 자료형과 객체 자료형에 차이는  
기본 자료형은 객체가 아니므로 속성과 메소드를 추가할 수 없다는 것이다

기본 자료형이 속성 또는 메소드를 가지고 있는 이유는 속성과 메소드를 이용할 때 객체로 변환되기 때문이다.

그러면 기본 자료형에 속성 또는 메소드를 추가할 수 없냐는 질문에는 아니다 라고 대답할 수 있다.  
프로토타입으로 일회용 옷 자체로 바꾸면 된다.

이와 관련된 내용은 ch07.js에서 확인바람

* * *
### 6장 끝!

>null값과 자료형

0, NaN, ""[빈 문자열]은 false로 변환될 뿐 실제로는 값이 들어가있다고 할 수 있다.  
아예 없는 상태를 표현하기 위하여 null을 이용한다.

>프로토타입

생성자함수로 만든 객체는 프로토타임 공간에 메소드를 지정해서 모든 객체가 공유하도록 한다. 해당 함수는 생성자 함수로 사용했을 때만 의미가 생긴다 
```js
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.print = function () {
    console.log(`${this.name}의 가격은 ${this.price}원입니다`)
};

let products = [
    new Product('바나나',1200),
    new Product('d',1200),
    new Product('b',1200),
    new Product('c',1200),
];

for (let product of products)
{
    product.print();
}
```


>생성자 함수

생성자 함수: 객체를 만드는 함수
```js
function Prodcut(name,price)
{
    this.name = name;
    this.price = price;
}
```
이런식으로 제작된 함수는 new 키워드와 함께 사용해 객체를 생성한다  
new 키워드를 사용하지 않고 선언하면 일반 함수가 호출되어 아무값도 리턴하지 않으므로 변수에 아무 값도 들어가지 않는다. 

```js
function Product(name, price) {
    this.name = name;
    this.price = price;
}

let product = new Product("ㅎㅎ",1200);

console.log(product);
```


## [04월 27일]

>배운 내용  

>객체 배열

배열과 객체를 사용하면 여러개의 데이터를 쉽게 사용할 수 있음
```js
let product = [
    {name: "사과", price: 1200},
    {name: "배", price: 1500},
    {name: "바나나", price: 1000},
    {name: "딸기", price: 2000},
];
```
출력하는 방법 경우 ch06.js 참고

>속성과 메서드

요소: 배열 내부에 있는 값  
속성: 객체 내부에 있는 값  
메소드: 객체 내부의 있는 함수

```js
let foo = {
    name: "건조 망고",
    price: 1200,
    print: function () {
        console.log(`${this.name} - ${this.price}`);
    }
}

foo.print();
```
name: "건조 망고"가 요소  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"건조 망고"가 객체  
print 부분이 메소드 부분  
실행시키는 건 변수.메소드(); 하면 실행할 수 있다.   
그리고 또한 무명함수를 사용하면 this가 작동하지 않아 사용할 수 없다.  
그리고 또한 this가 생략될 수 없다. 

>JSON (객체 선언)

JSON: Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷  
작은 데이터를 보관하기 다른 언어에서도 자주 사용한다.

사용법은
```js
let foo = {
    key: keycode,
    key1: "codode",
    key12: "codo33de"
}

console.log(foo);
console.log(foo.key);
```
키: 속성 값 이런 식으로 사용한다.


* * *
### 5장 끝!

>this

자신과 관련있는 내용만 것만 나타냄
무언가 차이가 있다는 정도로만 일단 알고 있기

>변수의 대하여

변수는 메모리에 값을 저장하는데 선언된 순서되로 값이 덮어지므로  
```js
let foo;

foo = 10;
foo = 20;
foo = 30;

console.log(foo);
```
위에 값은 30이 출력된다.  

무명함수 또한 
```js
let foo;

foo =() => {console.log("1st");}
foo =() => {console.log("2nd");}
foo =() => {console.log("3rd");}

foo();
```
마지막에 선언된 3rd가 출력되지만  

유명함수 같은 경우
```js

foo =() => {
    console.log("1st");
}

function foo (){
    console.log("2nd");
}

foo();
```
자바 스크립트에서 유명함수가 먼저 실행됨으로 
1st가 출력되게 된다.  

>clearInterval

setInterval의 무한 루프를 탈출시켜준다.  
```js
let bar = setInterval(() => {
    console.log("1초 경과");
}, 1000);

setTimeout(() => {
    clearInterval(bar);
}, 3000)
```


## [04월 13일]

>배운 내용 

>타이머 함수

'특정 시간 후'에 또는 '특정 시간 마다'어떤 일을 할 때 사용한다.  
시간은 밀리초로 지정, 1초를 나타내려면 1000을 입력해야한다.
setTimeout(함수, 시간): 특정 시간후에 함수를 실행한다.  
setInterval(함수,시간): 특정 시간마다 함수를 실행한다.  

>숫자 변환 함수

parselnt(): 문자열을 정수로 변환한다.  
parseFloat(): 문자열을 실수로 변환한다.  

>콜백함수

함수의 매개 변수로 전달되는 함수
```js

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
```
함수가 함수의 매개 변수로 들어감으로써 함수를 반복하게 해주는 것

>리턴하는 함수의 기본 형태

```js
function (<매개변수>,<매개변수>){
    let output = 초기값;
    //계산
    return output;
}
```
<br>


>함수의 기본 형태

```js
function <함수 이름>(매개 변수)
{
    코드 덩어리
    retrun <리턴 값>
}
```
다만 함수의 종류의 따라 리턴은 해도 되고 안해도 된다.  
몇몇다른 함수들에 대해서는 ch05.js확인 

>화살표 함수

하나의 표현식을 리턴하는 함수를 만들때 중괄호 생략 가능  
```js
let fun = () => console.log("하하하")
```
이런식으로 선언이 가능하다  
그리고 무명함수 예제를 화살표 함수로 전환하면  
```js
let fun = () =>{
    코드 덩어리
}
```
로 전환이 가능한다.  


>선언적 함수

이름을 붙여 함수를 생성하는 것  
```js
fuction fun()
{
    코드 덩어리
}
fun();
```
ch05.js 확인  


>무명함수

이름을 붙이지 않고 함수를 생성하는 것  
함수를 호출하면 함수 내부 코드를 모두 실행한다.  
```js
fuction()
{
    코드 덩어리
}
```
다만 이렇게 하면 함수를 호출 수 없기에 
```js
let fun = fuction()
{
    코드 덩어리
}
fun();
```
이런 식으로 변수를 만들어 줌으로 써 함수를 호출한다  
ch05.js 확인


## [04월 06일]

* * *
### 4장 끝!

>배운 내용 

>var

현대 자바스크립트는 잘쓰이지 않으나
인터넷 익스폴로러에서만 사용중이다.

>스코프

변수를 사용할 수 있는 범위
자바 스크립트에서는 스코프 == 블록이라고 생각하면된다.  
블중괄호로 둘러쌓인 부분을 블록이라고 한다.

>push,pop

push : 배열의 마지막 주소에 원하는 값을 추가하는 함수  
pop : 배열의 마지막 주소에 있는 값을 제거해주는 함수  
shift : 배열의 첫번째 주소에 있는 값을 제거한 후 반환해주는 함수  
concat : 두 개의 배열을 합쳐주는 함수  
reverse : 배열을 역순으로 재배열하는 함수
sort : 아스키코드로 배열을 정렬하는 함수  
slice : 배열을 자르고 반환하는 함수  
splice :  배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.  
join : 배열값들 사이에 원하는 문자를 삽입하여 반환한다.
  
push 와 pop를 이용하면 stack을 이용할수있으며  
push 와 shift를 이용하면 queue로 이용할수있다.  
  
array.js 에제 확인  

>break, continue

break : switch나 반복문을 벗어나기 위해 사용한다.  
continue : 현재 반복을 멈추고 다음 반복으로 넘어간다.  
예제 4-9.js확인

>중첩 반복문

반복문이 중첩되면 중첩 반복문이라 말한다
```JS
let out = "";

for(let i = 0; i < 10; i++)
{
    
    for(let j = 0; j <= i; j++)
    {
        out += "*";
    }
    out += "\n";
}

console.log(out);
```
4-12.js, tri.js에 관련된 예제가 있음

>html에서 자바스크립트 실행

```html
<script src="자바스크립트"></script>
```
이런 식으로 넣으면 자바 스크립트를 실행할 수 있다.  

## [03월 30일]

>배운 내용 

>for in 과 for of 반복문

객체에 쉽게 반복문을 적용할 때 사용한다

```JS
    let array = [1,2,3,4,5]

    for(let i in array)
    {
        console.log(`${i}번째 요소: ${array[i]}`);
    }

    for(let item of array)
    {
        console.log(item);
    }
```

>for문

for문은 초기식과 조건식을 비교하여 반복하는 반복문임  
조건식이 fasle라면 반복을 종료하고  
조건식이 ture라면 반복을 계속한다.  

```js
for(초기식/*생략가능*/; 조건문; 증감식)
{
    문장;
}
```

>while문

while문은 표현식이 참인 동안 계속 실행하는 반복문임

```js
while(불 표현식)
{
    문장;
}
```

>배열

여러개의 자료를 한꺼번에 다룰 수 있는 자료형이다  
여러 자료형을 섞어 사용할 수 있다  
배열 선언 형태  
```js
let 이름 = [자료,자료,자료]
```
배열 안에 있는 각 자료를 요소라고 한다.  
대괄호 안에 넣는 숫자는 인덱스라고 한다.

>반복문

반복문을 사용하는 이유는 복사 붙여 넣기를 1000번 출력을 하는 것은  
굉장히 힘들기 때문에 우리는 반복문을 사용한다.  

* * *
### 3장 끝!

>좀더 나아가기

node.js에서 입력을 받기 위해서는 굉장히 어렵다.  
웹 브라우저에서 사용되는 자바 스크립트에서는 prompt에서 값을 받아오면 되지만  
node.js에 사상 때문에 받아오기가 힘들다.  
그렇기에 받아오기 위해서는 이러한 코드를 짜야한다.  

```js
const repl = require('repl');

repl.start({
    prompt: "숫자입력 :" ,
    eval: (command, context, filename, callback) => {
    let number = Number(command);
    if(isNaN(number)) {
        console.log("숫자가 아닙니다");
    }
    else{
        console.log("숫자입니다")
    }
    callback();
}
})
```

>삼항 연산자

프로그램의 진행에 따라 변화시킬수 있다.    

예
```js
bool표현식 ? 참일 때 실행 : 거짓일 때 실행
```

>스위치문

switch에 있는 값이 case에 있는값과 동일하다면 case에 있는 문장을 실행시키고  
break가 있다면 switch 문을 탈출한다.  
또한 동일한 값을 출력해야 할때 case을 연속으로 사용하여 출력시킬 수 있다.  

없다면  

```js
switch(비교할 값)
{
    case 값:
        문장;
        break;
    case 값:
        문장;
        break;
    case 값:
    case 값:
    case 값:
    case 값:
        문장;
        break;
    default:
        문장;
        break;
}
```


>if else if 조건문

중북되지 않은 3가지 조건문이 존재할때 사용

예
```js
    if(조건문)
    {
        문장;
    }
    else if()
    {
        문장;
    }
    else if(조건문)
    {
        문장;
    }
    else
    {
        문장;
    }
```

>중첩 조건문

중첩 조건문:조건문이 중첩되서 사용되는 경우를  

예
```js
if()
{
    if()
    {
        문장;
    }
    else
    {
        문장;
    }
}
```
## [03월 23일]

>배운 내용 

>if 조건문


기본 형태임
```js
if(조건문){

}

if else 조건문 

if(조건문){

}
else{

}
```

* * *
### 2장 내용 끝

복합 대입, 연산자 증감, 연산자 자료형 검사, 강제 자료형 변환, 자동 자료형 변환 등이 있었음 

>상수

const로 생성하며
변하지 않을 것을 만들기 위해 사용한다
사용하는 이유는 빠르고 안전하게 만들기 위해서 사용함

>일치 연산자

= = = 자료형이 같은지 확인
! = = 자료형이 값이 다른지 확인

>변수 선언

let으로 선언함      
자료형을 선언하지 않음      
그래서 다양한 자료형을 넣을 수 있음     
자바 스크립트의 자료형은 6가지임
문자열, 숫자열, 불, 함수, 객체, undefined


>불

true또는 false를 사용
9 > 6 > 3을 쓰면 안됨
쓰게 되면 
(9 > 6) > 3
true > 3
1 > 3 
false이 출력 되므로 안됨    
9 > 6 > 3 이렇게 하고 싶으면    
9 > 6 && 6 > 3 이런 식으로 선언해야 됨  

 
>템플릿 문자열

``이건 백틱     
''이건 작은 따음표  

템플릿 문자열을 생성할 때는 ` 이걸 사용한다.        
템플릿 문자열이 생성하고 난 뒤는 일반 문자열과 동일하게 취급한다.         
${<표현식>}을 사용할수있다.     
${23+23}을 입력하면 46이 나온다     


>아스케이프 문자

특수한 기호 줄바꿈을 사용할때 사용하기 위한 것  


## [03월 16일]

>배운 내용

>출력 메소드

console.log("문자열");


>기본 용어!

표현식: 간단한 코드     
문장: ;로 끝나는 표현식들   
프로그램: 문장이 모인 것    
키워드: 특별한 의미를 가진 단어임   
식별자: 이름을 붙이는거 그리고 규칙있음     

>html

script를 이용하여 js를 삽입할 수 있다.  
또한 script는 head에 삽입한다.  
그러나 용량이 너무나도 큰 경우일 경우 body에 넣는 경우도 있다.  
alert("hello World...!") 이거 쓰면 팝엄창으로 띄울 수 있음  

>node.js

콘솔 창에서 node를 칠 경우 간단한 명령을 실행할 수 있다 
node *.js 를 터미널에 입력 할 경우 js을 실행할 수 있다. 
브라우저에서도 간단한 명령을 실행할 수 있다.    

>자바 스크립트

자바 스크립트는 서버, 게임 스마트폰 애플리케이션, 데스크톱 애플리케이션 개발 등에 사용된다



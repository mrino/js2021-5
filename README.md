# 신동주 202030420  

## [04월 06일]

>push,pop

== push == : 배열의 마지막 주소에 원하는 값을 추가하는 함수
== pop == : 배열의 마지막 주소에 있는 값을 제거해주는 함수

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
        console.log('$(i)번째 요소: $(array[i]');
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



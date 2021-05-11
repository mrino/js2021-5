



























// //기본 지료형
// let num = 123;
// let str = "gg";
// let bool = true;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);

// //객체 지료형
// let num1 = new Number(123);
// let str1 = new String("gg");
// let bool1 = new  Boolean(true);

// console.log(typeof num1);
// console.log(typeof str1);
// console.log(typeof bool1);

// //기본 자료에 속성 또는 메소드 추가

// // let foo = 222;

// // foo.method = function () {
// //     return "aaa";
// // };

// // console.log(foo.method());
// // 오류가 나오는 게 확인됨

// //기본 자료에 속성 또는 메소드를 프로토타입을 이용해서 추가하기

// let foo = 222;

// Number.prototype.method = function () {
    
//     return 'aaa';
// };

// console.log(foo.method());

// //Number 객체 생성 
// let Num = 12.23;
// let Num2 = new Number(12.34);

// console.log(Num.toExponential(10));
// console.log(Num.toFixed(1));
// console.log(Num.toPrecision(4));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN)

// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY+Number.NEGATIVE_INFINITY);


// function Constructor(){}
// Constructor.prototype = 283;
// Constructor.method = function () {};

// console.log(Constructor.prototype);
// console.log(Constructor.method);


// let st = "abcdefg";
// //toUpperCase는 문자열을 대문자로 바꾸어 리턴하는 메소드다.
// st.toUpperCase();
// console.log(st);

// let str2 = "abcdefg";
// //toUpperCase는 문자열을 대문자로 바꾸어 리턴하는 메소드다.
// str2 = str2.toUpperCase();
// console.log(str2);


// let Str = "좋은 아침입니다";

// if(Str.indexOf("아침")>= 0)
// {
//     console.log("좋은 아침이에요");
// }

// //현재 시간으로 Date 객체 생성
// let Date1 = new Date();
// //유닉스 타임으로 date 객체를 생성
// let Date2 = new Date(1600000000000);
// //문자열을 기반으로 Date 객체를 생성
// let Date3 = new Date("Decmber 9, 1991, 21:30:00");
// //시간 요소로 객체를 생성
// let Date4 = new Date(1991, 12 -1, 9, 21 ,30, 0, 0);

// console.log(Date1);
// console.log(Date2);
// console.log(Date3);
// console.log(Date4);

// let now = new Date();
// let bar = new Date("Jul 5, 2001");

// let interval = now.getTime() - bar.getTime();

// interval = Math.floor(interval / (1000 * 60 * 60 * 24));

// console.log(`${interval}일`);

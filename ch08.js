//기본 예외 처리
// function call(callback) { 
//     if(callback){
//         for (let index = 0; index < 10; index++) {
//             callback();          
//         } 
//     } else {
//         console.log("다시입력해주세요");
//     }
// }

// call(function () {console.log("gg");});

// call();

// 고급 예외 처리

try {
    const array = new Array(-200);
} catch (e) {
    console.log("오류임");
    return;
} finally {
    console.log("함수가 종료됨");
}



let date = new Date();
hour = date.getHours();

console.log("Hello World...!");

console.log(hour >= 3 || 8 <= hour);

let tpye = typeof(date.getHours());
console.log(tpye);


console.log(52 == "52");
console.log(52 === "52");

let input = 32;

if(input % 2 == 0){
    console.log("짝수");
}
else{
    console.log("홀수");
}


if(date.getHours() < 12){
    console.log("오전임 ㅅㄱ");
}
else{
    console.log("오후임 님 망했음");
}

//date
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getUTCSeconds());
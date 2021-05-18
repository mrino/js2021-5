//os 관련
// const os = require("os");

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.totalmem());

//url 관련
// const url = require("url");

// const object = url.parse("https://www.naver.com/");

// console.log(object);

// fs 관련
// const fs = require("fs");

// const file = fs.readFileSync("EEE.txt");
// console.log(file);
// console.log(file.toString());

// const fs = require("fs");
// const lol = require("async");

// lol.parallel([
//     (callback) => { fs.readFile("EEE.txt", callback);},
//     (callback) => { fs.readFile("EEE.txt", callback);},
//     (error, results) => {
//         console.log(results);
//     }
// ]);

// fs.readFile("EEE.txt", (error, file) => {
//     console.log(file, file.toString());
// })

// const fs = require("fs");

// fs.writeFileSync("text.txt", "ㅎㅎㅎㅎ");


const fs = require("fs");

fs.readFile("none.txt", (error, file) => {
    if(error){
        console.log("오류임");
    } else {
        console.log(file.toString());
    }
})
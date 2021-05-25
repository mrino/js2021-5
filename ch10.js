// //객체 생성
// const express = require('express');
// // 서버 생성
// const app = express();

// //request 이벤트 리스너 실행
// app.use((request, response) => {
//     response.send('<div><strong>안녕하신가</strong></div>');
// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });

//기본!

// //객체 생성
// const express = require('express');
// // 서버 생성
// const app = express();

// //request 이벤트 리스너 실행
// app.use('/page/:id',(request, response) => {
//     const id = request.params.id;
    
    
//     let a  = `<div>${id} page</div>`;
//     a += `<div><strong>안녕하신가</strong></div>`
//     response.send(a);

// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });


// //객체 생성
// const express = require('express');
// // 서버 생성
// const app = express();

// //request 이벤트 리스너 실행
// app.get('*',(request, response) => {
    
//     response.status(404);
//     response.set("methodA", "ABCD");
//     response.set({
//         methodB1: 'FGHIJ',
//         methodB2: 'KLMNO'
//     });
//     response.send('<div><strong>안녕하신가</strong></div>');
// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });

// //객체 생성
// const express = require('express');
// const fs = require('fs');
// // 서버 생성
// const app = express();

// //request 이벤트 리스너 실행
// //'/audio' 이거 경로아님
// app.get('/audio', (request, response) => {
//     // fs에 있는게 경로임
//     fs.readFile('audio.mp3', (error, data) => {
//         response.type('audio/mpeg');
//         response.send(data);
//     })
// });
// //'/image' 이거 경로아님
// app.get('/image', (request, response) => {
//     // fs에 있는게 경로임
//     fs.readFile('image.png', (error, data) => {
//         response.type('image/png');
//         response.send(data);
//     })
// });


// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });

// //객체 생성
// const express = require('express');
// // 서버 생성
// const app = express();

// //request 이벤트 리스너 실행
// app.get('*',(request, response) => {
//     response.redirect("https://www.naver.com");
// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });



// //객체 생성
// const express = require('express');
// // 서버 생성
// const app = express();

// //request 이벤트 리스너 실행
// app.get("*",(request, response) => {
//     console.log(request.query);
//     response.send(request.query);
// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });

// //객체 생성
// const express = require('express');
// // 서버 생성
// const app = express();
// app.use(express.static("example"));

// //request 이벤트 리스너 실행
// app.get("*",(request, response) => {
//     // console.log(request.query);
//     // response.set(404);
//     response.send("해당 경로에는 아무것도 없습니다.");
// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });

// //객체 생성
// const express = require('express');
// const morgan = require("morgan");
// // 서버 생성
// const app = express();
// app.use(express.static("example"));
// app.use(morgan("combined"));
// //request 이벤트 리스너 실행
// app.get("*",(request, response) => {
//     // console.log(request.query);
//     // response.set(404);
//     response.send("명령프롬프트확인 ㄱ");
// });

// //숫자는 아무거나 사용가능
// app.listen(52313, () => {
//     console.log("server runnig at http://127.0.0.1:52313/");
// });


//객체 생성
const express = require('express');
const morgan = require("morgan");
const bodyPaser = require("body-parser");
// 서버 생성
const app = express();
app.use(express.static("example"));
app.use(morgan("combined"));
app.use(bodyPaser.urlencoded({ extended: false}));
//request 이벤트 리스너 실행
app.get("/page",(request, response) => {
    // console.log(request.query);
    // response.set(404);
    let out = ``;
    out += `<form method=post>`;
    out += ` <input type="text" name="a" />`;
    out += ` <input type="text" name="b" />`;
    out += ` <input type="submit" />`;
    out += `</from>`;
    response.send(out);
});

//숫자는 아무거나 사용가능
app.listen(52313, () => {
    console.log("server runnig at http://127.0.0.1:52313/");
});
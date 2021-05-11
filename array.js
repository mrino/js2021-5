// let i = 0;
// let array = [52,273,32,65,103];

// while(i < array.length)
// {
//     console.log(i+1 +"번째 출력: "+ array[i]);
//     i++;
// }
// i = 0;
// for(i; i< array.length; i++)
// {
//     console.log(i+1 +"번째 출력: "+ array[i]);
// }

// console.log("-------------------------");
// let arr = [1,2,3,4,5]

// for(let i in arr)
// {
//     console.log(`${i}번째 요소: ${arr[i]}`);
// }

// for(let item of arr)
// {
//     console.log(item);
// }


// let foo = [1,2,3,4,5];
// console.log(foo.length);
// console.log(foo);
// foo.push(13);
// console.log(foo.length);
// console.log(foo);
// foo.pop();
// console.log(foo.length);
// console.log(foo);
// foo.push(13);
// console.log(foo.length);
// console.log(foo);

// console.log("//////");
// console.log(foo.length);
// for(let i in foo)
// {
//     console.log(i);
//     foo.pop();
//     console.log(foo);
// }

// console.log("ddd")
// console.log(foo);



// re start

// let foo = [10,11,12,13,14,15]
// let bar = [1,4,2,3,5];

// console.log("원본")
// console.log(bar);
// //psuh
// bar.push(6);
// console.log("\n push");
// console.log(bar);
// //pop
// bar.pop()
// console.log("\n pop");
// console.log(bar);
// //shift
// console.log("\n shift");
// bar.shift();
// console.log(bar);
// //concat
// console.log("\n concat");
// let Rog = bar.concat(foo);
// console.log(Rog);
// //reverse
// console.log("\n reverse");
// console.log(bar.reverse());
// //sort
// console.log("\n sort");
// console.log(bar.sort());

// let ho = [{
//         name: "고구마",
//         price: 1200
//     },
//     {
//         name: "감자",
//         price: 500
//     },
//     {
//         name: "바나나",
//         price: 800
//     }];

// let pop = ho.pop();

// console.log(pop);
// console.log(ho);

// ho.push({
//     name: "호엥",
//     price: 3000
// },
// {
//     name: "호d엥",
//     price: 300000000
// });
// console.log(ho);
// console.log(ho.sort());

// let foo = [23, 232, 124, 234, 43];

// foo.forEach((item, index) => {
//     console.log(`${index}번째 요스는 ${item}입니다`)
// });

// let bar = foo.map((item, index) => {
//     return item + item;
// });

// console.log(bar);

// let lol = foo.filter((item, index) => {
//     return item % 2 == 0;
// });

// console.log(lol);

const _ = require("underscore");

const ho = [{
        name: "고구마",
        price: 1200
    },
    {
        name: "감자",
        price: 500
    },
    {
        name: "바나나",
        price: 800
    }];

const foo = _.sortBy(ho, (item) => item.price);
console.log(foo);

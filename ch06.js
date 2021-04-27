// let foo = ["사과", "배", "바나나", "딸기"];

// let bar = {
//     key: "code",
//     key1: "codode"
// }

// console.log(bar.key);
// console.log(bar.key1);

// let foo = {
//     name: "건조 망고",
//     price: 1200,
//     print: function () {
//         console.log(`${this.name} - ${this.price}`);
//     }
// }

// foo.print();

let products = [
    {name: "사과", price: 1200},
    {name: "배", price: 1500},
    {name: "바나나", price: 1000},
    {name: "딸기", price: 2000},
];

function printProdcut(bar) {
    console.log(`${bar.name} - ${bar.price}`);    
}

for(let foo of products)
{
    printProdcut(foo);
}
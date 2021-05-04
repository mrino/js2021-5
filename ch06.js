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

// // foo.print();

// let products = [
//     {name: "사과", price: 1200},
//     {name: "배", price: 1500},
//     {name: "바나나", price: 1000},
//     {name: "딸기", price: 2000},
// ];

// function printProdcut(bar) {
//     console.log(`${bar.name} - ${bar.price}`);    
// }

// for(let foo of products)
// {
//     printProdcut(foo);
// }

// function Product(name, price) {
//     this.name = name;
//     this.price = price;   
// }

// let product = new Product("호에엥",1200);

// console.log(product);


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// let product = new Product("ㅎㅎ",1200);

// console.log(product);


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
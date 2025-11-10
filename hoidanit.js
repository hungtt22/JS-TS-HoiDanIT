const product1 = {
    name: "Oppo",
    price: 100,
    inStock: true,
};
const product2 = {
    name: "Samsung",
    price: 200,
    inStock: true,
};
const product3 = {
    name: "Nokia",
    price: 300,
    inStock: false,
};
const product4 = {
    name: "Vivo",
    price: 400,
    inStock: false,
};
const product5 = {
    name: "Apple",
    price: 500,
    inStock: false,
};
const products = [product1, product2, product3, product4, product5];
console.log("Array origin:", products);
//1.
console.log(products[0]);
//2.
const update_products = [
    product1,
    {
        ...product2,
        price: 150,
    },
    product3,
    product4,
    product5,
];
console.log("Array update:", update_products);
//3.
const product6 = {
    name: "Xiaomi",
    price: 600,
    inStock: false,
};
products.push(product6);
console.log("Array update:", products);
//4.
products.pop();
console.log("Array update:", products);
//5.
products.forEach((product) => {
    console.log(product.name);
});
//6.
const prices = products.map((product) => {
    return product.price;
});
console.log(prices);
//7.
products.filter((product) => {
    if (product.inStock === true) console.log(product);
});
//8.
for (let key in products[0]) {
    console.log(key);
}
for (const product of products) {
    console.log(product);
}

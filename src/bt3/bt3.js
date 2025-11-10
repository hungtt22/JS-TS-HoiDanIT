const product_1 = {
    id: 1,
    name: "Iphone 14 Pro Max",
    price: 30990000,
    brand: "Apple",
    color: "Black",
    inStock: true,
};
const product_2 = {
    id: 2,
    name: "Samsung Galaxy Z Fold4",
    price: 41000000,
    brand: "Samsung",
    color: "Gray",
    inStock: true,
};
const product_3 = {
    id: 3,
    name: "Xiaomi Mix Fold 2",
    price: 22000000,
    brand: "Xiaomi",
    color: "White",
    inStock: true,
};
const product_4 = {
    id: 4,
    name: "Oppo Find N2 Flip",
    price: 19500000,
    brand: "Oppo",
    color: "Purple",
    inStock: false,
};
const product_5 = {
    id: 5,
    name: "Vivo X Fold+",
    price: 21000000,
    brand: "Vivo",
    color: "Blue",
    inStock: false,
};
const products = [product_1, product_2, product_3, product_4, product_5];
console.log(products);
//1.
console.log(products[0].name);
//2.
const updatedProducts = [
    product_1,
    {
        ...product_2,
        price: 150,
    },
    product_3,
    product_4,
    product_5,
];
console.log(updatedProducts);

console.log(
    "-------------------------------------------------------------------"
);
//3.
const product_6 = {
    id: 6,
    name: "Nokia X30",
    price: 8700000,
    brand: "Nokia",
    color: "Green",
    inStock: true,
};
products.push(product_6);
products.forEach((product) => {
    console.log(
        `Mã sản phẩm: ${product.id}, Tên sản phẩm: ${product.name}, Giá: ${product.price}, Hãng: ${product.brand}, Màu sắc: ${product.color}, Còn hàng: ${product.inStock}`
    );
});
console.log(
    "-------------------------------------------------------------------"
);
//4.
products.pop();
products.forEach((product) => {
    console.log(
        `Mã sản phẩm: ${product.id}, Tên sản phẩm: ${product.name}, Giá: ${product.price}, Hãng: ${product.brand}, Màu sắc: ${product.color}, Còn hàng: ${product.inStock}`
    );
});
//5.
const prices = products.map((product) => {
    return product.price;
});
console.log(prices);
//6.
const inStockProducts = products.filter((product) => {
    if (product.inStock === true) {
        return product;
    }
});
console.log(inStockProducts);
//7.
//for in: Duyệt qua các thuộc tính của phần từ
for (let key in products[0]) {
    console.log(key);
}
//for of: Duyệt qua object (key-value) của mảng
for (const product of products) {
    console.log(product);
}

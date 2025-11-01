const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
//Không giới hạn kiểu dữ liệu trong mảng
const mixedArray = [1, "two", 3, "four", true];

console.log(names);
console.log(mixedArray);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// Update value phần tử trong mảng
names[3] = "Dan";
console.log(names);

//Thêm phần tử vào mảng
names.push("Last");
names.unshift("First");
console.log(names);

//Xóa phần tử khỏi mảng
names.pop(); //Xóa phần tử cuối cùng
names.shift(); //Xóa phần tử đầu tiên
console.log(names);

// Duyệt mảng
for (let i = 0; i < names.length; i++) {
    console.log(`Index ${i}: ${names[i]}`);
}
console.log("----------------------------------");
//for-each : Read Data
names.forEach(function (name, index) {
    console.log(`Index ${index}: ${name}`);
});
console.log("----------------------------------");
names.forEach((name, index) => {
    console.log(`Index ${index}: ${name}`);
});
// map : Modify Data
const scores = [10, 20, 30, 40, 50];
scores.forEach((score, index) => {
    return score * 2;
});
console.log(scores);

const doubledScores = scores.map((score, index) => {
    return score * 2;
});
console.log(doubledScores);
// filter : Lọc dữ liệu

const highScores = scores.filter((score) => {
    return score > 25;
});
console.log(highScores);

// Shallow copy vs Deep copy
const originalArray = [1, 2, 3, 4, 5];
const shallowCopy = originalArray; // Shallow copy
// Shallow copy: Biến cũ và biến mới cùng tham chiếu đến một vùng nhớ và khi thay đổi biến mới thì biến cũ cũng bị thay đổi theo và ngược lại
const deepCopy = [...originalArray]; // Deep copy
// Deep copy: Biến mới hoàn toàn độc lập với biến cũ  và khi thay đổi biến mới thì biến cũ không bị ảnh hưởng và ngược lại
const pizza1 = {
    name: "Peperoni",
    price: 100,
    toppings: ["cheese", "tomato", "pepperoni"],
};
const shallowCopy2 = pizza1; // Shallow copy
const deepCopy2 = {
    ...pizza1,
    toppings: [...pizza1.toppings],
}; // Deep copy
shallowCopy2.price = 120;
deepCopy2.toppings[0] = "mushrooms";
console.log(pizza1);
console.log(shallowCopy2);
console.log(deepCopy2);

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

const student1 = {
    name: "Hoang An",
    age: 20,
    address: {
        city: "Da Nang",
        country: "Viet Nam",
    },
};
const student2 = {
    name: "Foody",
    age: 20,
    address: {
        city: "Da Nang",
        country: "Viet Nam",
    },
};
const studentList = [student1, student2];

studentList.forEach((student) => {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`City: ${student.address.city}`);
    console.log(`Country: ${student.address.country}`);
    console.log("-----");
});

student1.address.city = "Ho Chi Minh City";
student1.sex = "Male";
console.log("After updating city && Sex:");
console.log(student1);
delete student1.sex;
console.log("After deleting sex:");
console.log(student1);

// for in loop duyệt thuộc tính của object
for (const key in student2) {
    console.log(`${key}: ${student2[key]}`);
}

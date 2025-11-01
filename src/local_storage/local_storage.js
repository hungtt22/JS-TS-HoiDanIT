//Local Storage là một tính năng của trình duyệt web cho phép lưu trữ dữ liệu cục bộ trên máy tính của
//người dùng dưới dạng cặp khóa-giá trị. Dữ liệu được lưu trữ trong Local Storage sẽ không bị xóa khi
//đóng trình duyệt, giúp người dùng có thể giữ lại thông tin quan trọng giữa các phiên làm việc khác nhau.
const btnElement = document.getElementById("btnSubmit");
const inputElement = document.getElementById("name");
const displayElement = document.getElementById("nameDisplay");

const prevDisplayElement = document.getElementById("prevNameDisplay");
prevDisplayElement.innerText =
    localStorage.getItem("nameLocalStorage") || "Chưa có tên được lưu trữ";

btnElement.addEventListener("click", () => {
    displayElement.innerText = inputElement.value;
    localStorage.setItem("nameLocalStorage", inputElement.value);
    alert("Name updated!");
});

//Local Strorage chỉ lưu trữ dữ liệu dưới dạng chuỗi (string). Nếu bạn muốn lưu trữ các kiểu dữ liệu khác như số,
//mảng hoặc đối tượng, bạn cần chuyển đổi chúng thành chuỗi trước khi lưu trữ (ví dụ: sử dụng JSON.stringify)
//và chuyển đổi ngược lại khi lấy dữ liệu (ví dụ: sử dụng JSON.parse).

const student = {
    name: "Nguyen Van A",
    age: 20,
    major: "Computer Science",
};
localStorage.setItem("student", JSON.stringify(student));
const storedStudent = localStorage.getItem("student");
console.log(JSON.parse(storedStudent));

const number = 6789;
localStorage.setItem("number", number);
console.log(parseInt(localStorage.getItem("number")));

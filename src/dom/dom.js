//Dom là toàn bộ các phần tử Html trong trang web

const element = document.getElementById("content");
console.log(element);
//Lấy phần tử đầu tiên có class là content_2
const element2 = document.querySelector(".content_2");
console.log(element2);
//Lấy tất cả phần tử có class là content_2
const element3 = document.querySelectorAll(".content_2");
console.log(element3);

//Event
function handleClick1() {
    console.log("Bạn đã click vào tôi");
}

//arrow function
const handleClick2 = () => {
    console.log("Bạn đã click vào tôi");
};

//addEventListener là cách thêm sự kiện cho phần tử

const element4 = document.getElementById("btnClick_2");
const handleClick3 = () => {
    console.log("Bạn đã click vào tôi lần 2");
};
element4.addEventListener("click", handleClick3);

//Thay đổi nội dung và css của thẻ Html
const btnElement = document.getElementById("btnChangeContent");
const resetBtnElement = document.getElementById("btnResetContent");
const titleElement = document.getElementById("title");
//innerText là thuộc tính dùng để thay đổi nội dung bên trong thẻ Html nhưng không nhận biết thẻ Html
//innerHTML là thuộc tính dùng để thay đổi nội dung bên trong thẻ Html
btnElement.addEventListener("click", () => {
    // titleElement.innerText = "Change nội dung thành công <u>Hỏi Đáp IT</u>";
    titleElement.innerHTML = "Change nội dung thành công <u>Hỏi Đáp IT</u>";
    titleElement.style.color = "red";
    titleElement.style.textAlign = "center";
    //classlist: thuộc tính dùng để thêm, xóa, kiểm tra class của thẻ Html
    titleElement.classList.add("title-style", "eric");
    alert("Bạn đã thay đổi nội dung thành công");
});

resetBtnElement.addEventListener("click", () => {
    titleElement.innerHTML = "InnerHTML và InnerText";
    titleElement.style.color = "black";
    titleElement.style.textAlign = "left";
    titleElement.classList.remove("title-style", "eric");
    alert("Bạn đã thay đổi nội dung thành công");
});

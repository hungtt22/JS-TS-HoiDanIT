const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const btnSubmitElement = document.getElementById("btnSubmit");
console.log(usernameElement, passwordElement, btnSubmitElement);
btnSubmitElement.addEventListener("click", () => {
    if (
        usernameElement.value === "RainBow" &&
        passwordElement.value === "123456"
    ) {
        alert("Login Successful");
        window.location.href = "./successful.html";
    } else {
        alert("Login Failed");
        usernameElement.style.borderColor = "red";
        passwordElement.style.borderColor = "red";
    }
});

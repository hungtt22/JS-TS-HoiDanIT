const nameElement = document.getElementById("name");
const btnSubmit = document.getElementById("btn-submit");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (btnSubmit) {
    btnSubmit.addEventListener("click", () => {
        const myTodo = {
            id: getRandomInt(1, 1000),
            name: nameElement.value,
        };
        const currentTodo = JSON.parse(localStorage.getItem("todo"));
        if (currentTodo) {
            currentTodo.push(myTodo);
            localStorage.setItem("todo", JSON.stringify(currentTodo));
        } else localStorage.setItem("todo", JSON.stringify([myTodo]));
        window.location.href = "bt6.html";
    });
}

const genericTodoList = () => {
    const toDoList = JSON.parse(localStorage.getItem("todo"));
    const tbody = document.querySelector("#list_todo tbody");
    if (toDoList && toDoList.length && tbody) {
        toDoList.forEach((todo) => {
            tbody.innerHTML += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>
                    <button class="btn-delete" data-id="${todo.id}">
                       Delete
                    </button>
                </td>
            </tr> 
        `;
        });
    }
};
genericTodoList();

const btnDeletes = document.querySelectorAll(".btn-delete");
btnDeletes.forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        handleDelete(id);
    });
});
const handleDelete = (id) => {
    const currentTodo = JSON.parse(localStorage.getItem("todo"));
    const newTodo = currentTodo.filter((todo) => todo.id + "" !== id);
    localStorage.setItem("todo", JSON.stringify(newTodo));
    window.location.reload();
};

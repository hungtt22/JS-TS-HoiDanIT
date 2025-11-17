//Fetch
const fetchData = async () => {
    const response = await fetch("http://localhost:8000/blogs");
    const data = await response.json();
    const tbody = document.querySelector("#blogList tbody");
    data.forEach((blog) => {
        tbody.innerHTML += `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td>
                <button class="delete-btn" data-id="${blog.id}">Delete</button>
            </td>
        </tr>
        `;
    });
};

const addBlogToEnd = (blog) => {
    const tableBody = document.querySelector("#blogList tbody");
    // Tạo phần tử dòng mới
    const newRow = document.createElement("tr");
    // Gán HTML cho dòng
    newRow.innerHTML = `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td>
                <button class="delete-btn" data-id="${blog.id}">Delete</button>
            </td>
        </tr>
        `;
    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);

    const btn = document.querySelector(`[data-id="${blog.id}"]`);
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        //Call API to delete blog
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await rawResponse.json();
        const row = btn.closest("tr");
        row.remove();
    });
};
const addBlog = () => {
    const titleElement = document.getElementById("title");
    const authorElement = document.getElementById("author");
    const contentElement = document.getElementById("content");
    const addBlogBtn = document.getElementById("addBlogBtn");
    addBlogBtn.addEventListener("click", async () => {
        console.log(
            titleElement.value,
            authorElement.value,
            contentElement.value
        );
        //Call API to create a new blog
        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleElement.value,
                author: authorElement.value,
                content: contentElement.value,
            }),
        });
        const data = await rawResponse.json();
        addBlogToEnd(data);
        console.log("Phan hoi tu API:", data);
    });
};

const handleDelete = () => {
    const btnDeletes = document.querySelectorAll(".delete-btn");
    btnDeletes.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            //Call API to delete blog
            const rawResponse = await fetch(
                `http://localhost:8000/blogs/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await rawResponse.json();
            const row = btn.closest("tr");
            row.remove();
        });
    });
};

fetchData().then(() => handleDelete());
addBlog();

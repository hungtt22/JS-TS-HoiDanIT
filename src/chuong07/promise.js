const promise = new Promise(function (resolve, reject) {
    // resolve([
    //     { id: 1, name: "JavaScript" },
    //     { id: 2, name: "PHP" },
    //     { id: 3, name: "Ruby" },
    // ]);
    //reject();
});

promise
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {
        console.log("Fail");
    })
    .finally(function () {
        console.log("Complete");
    });
//Promise là kĩ thuật dùng để xử lý các tác vụ bất đồng bộ trong JavaScript.
//Trước khi có Promise, chúng ta thường sử dụng callback để xử lý các tác vụ bất đồng bộ.
//Tuy nhiên cách này dẫn đến hiện tượng "callback hell" khi có nhiều tác vụ lồng nhau.
//Promise giúp giải quyết đc vấn đề này giúp chúng ta viết code dễ đọc và dễ bảo trì hơn.
//Promise có 3 trạng thái:
//  + Pending
//  + Fulfilled
//  + Rejected

const promise2 = new Promise(function (resolve, reject) {
    resolve();
});

promise2
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(reject, 3000);
        });
    })
    .catch(function () {
        console.log("Fail");
    })
    .then(function (data) {
        console.log(data);
        return 2;
    })
    .then(function (data) {
        console.log(data);
    });

//Callback là một hàm (function) được truyền làm đối số cho một hàm khác,
// và được dự kiến sẽ được gọi lại (called back) tại một thời điểm nào đó sau này.
//Hàm chứa callback sẽ thực hiện thành công việc của nó và sau đó gọi callback để thông báo kết quả hoặc tiếp tục xử lý.
// Hàm 'xuLySau' là callback
function xuLySau() {
    console.log("Đây là công việc được thực hiện sau.");
}

// Hàm 'xuLyChinh' nhận một callback làm đối số
function xuLyChinh(callback) {
    console.log("Bắt đầu công việc chính...");
    // Giả lập một công việc bất đồng bộ (ví dụ: chờ 2 giây)
    setTimeout(callback, 2000);
    console.log("Công việc chính đã xong.");
}
xuLyChinh(xuLySau);
// Đầu ra:
// Bắt đầu công việc chính...
// Công việc chính đã xong.
// (Sau 2 giây)
// Đây là công việc được thực hiện sau.

//Callback hell là tình trạng mã nguồn trở nên khó đọc và khó bảo trì khi bạn phải thực hiện nhiều thao tác bất đồng bộ phụ thuộc
// lẫn nhau bằng cách lồng các hàm callback vào nhau.

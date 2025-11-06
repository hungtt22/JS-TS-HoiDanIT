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

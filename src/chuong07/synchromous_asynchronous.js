// Synchronous là chạy tuần tự, từng dòng một
console.log("Bắt đầu công việc 1");
console.log("Hoàn thành công việc 1");
console.log("Bắt đầu công việc 2");
console.log("Hoàn thành công việc 2");
console.log("-----------------------");
// Asynchronous là không chạy tuần tự, có thể chạy song song chứ không phải chờ nhau
// Nhược điểm nếu mà các chương trình chạy song song dựa vào kết quả của nhau thì sẽ phải xử lý phức tạp hơn
console.log("Bắt đầu công việc 1");
setTimeout(() => {
    console.log("Hoàn thành công việc 1");
}, 2000);
console.log("Bắt đầu công việc 2");
console.log("Hoàn thành công việc 2");

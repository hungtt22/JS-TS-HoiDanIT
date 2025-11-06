//Callback là một hàm (function) được truyền làm đối số cho một hàm khác,
// và được dự kiến sẽ được gọi lại (called back) tại một thời điểm nào đó sau này.
//Hàm chứa callback sẽ thực hiện thành công việc của nó và sau đó gọi callback để thông báo kết quả hoặc tiếp tục xử lý.

const greeting = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
};
const goodbye = () => {
    console.log("Goodbye");
};
const learn = () => {
    console.log("Learn JavaScript");
};
greeting("RainBow", goodbye);
console.log("==============");
greeting("Sear", learn);

//Callback hell là tình trạng mã nguồn trở nên khó đọc và khó bảo trì khi bạn phải thực hiện nhiều thao tác bất đồng bộ phụ thuộc
// lẫn nhau bằng cách lồng các hàm callback vào nhau.

const avg = (math, literature, english) => {
    return (math + literature + english) / 3;
};
const rate = (pointAvg) => {
    if (pointAvg >= 9) return "Excellent";
    else if (pointAvg >= 8 && pointAvg < 9) return "Giỏi";
    else if (pointAvg >= 6.5 && pointAvg < 8) return "Khá";
    else return "Trung bình";
};
let pointAvg = avg(7, 8, 9);
console.log("Điểm trung bình: " + pointAvg);
console.log("Xếp loại: " + rate(pointAvg));

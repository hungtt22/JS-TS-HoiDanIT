console.log("Fetch");
//fetch => raw data (Response) => object
const temp = fetch("http://localhost:8000/users");
//=> raw data (Response)
temp.then((res) => {
    return res.json(); //=> object
}).then((data) => {
    console.log(data); //=> In ra Object
});

// Try/Catch/Finally

const doSomeThing = () => {
    const a = 10,
        b = 0;
    if (b === 0) throw new Error("Không thể chia hết cho 0");
    return a / b;
};
try {
    console.log(doSomeThing());
} catch (error) {
    console.log(error);
} finally {
    console.log("Run Finally");
}

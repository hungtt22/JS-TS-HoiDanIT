//Promise
const response = fetch("http://localhost:8000/users");
response
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log("fetch promise ", data);
    });

//Async Await
const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("fetch Async_Await ", data);
};
fetchData();

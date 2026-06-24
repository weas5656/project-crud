const Array = [
    {
        id: "1",
        Name: "Mr A",
        Age: "23",
        Nickname: "A"
    },
    {
        id: "2",
        Name: "Mr B",
        Age: "22",
        Nickname: "B"
    },
    {
        id: "3",
        Name: "Mr C",
        Age: "23",
        Nickname: "C"
    },
];

const savedData = localStorage.getItem("local_array");
const array = savedData ? JSON.parse(savedData) : Array;

export default array;
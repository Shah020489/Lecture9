/*** */
var carList = [
    {
        name: "BMW",
        color: "Black",
        price: 2000000,
        model: "Sedan"
    },
    {
        name: "Audi",
        color: "White",
        price: 3000000,
        model: "Sedan"
    },
    {
        name: "Mercedes",
        color: "Red",
        price: 4000000,
        model: "Sedan"
    },
    {
        name: "Toyota",
        color: "Blue",
        price: 5000000,
        model: "Sedan"
    },
    {
        name: "Nissan",
        color: "Green",
        price: 6000000,
        model: "Sedan"
    },
    {
        name: "BMW",
        color: "White",
        price: 2000000,
        model: "Sedan"
    },
    {
        name: "BMW",
        color: "Black",
        price: 2000,
        model: "Sedan"
    },
    {
        name: "BMW",
        color: "Black",
        price: 20000,
        model: "Sedan"
    }
];
var filterRecord = carList.filter(function (carList) { return carList.price > 5000000; });
console.log(filterRecord);

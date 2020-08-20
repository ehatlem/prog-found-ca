// question 1

var name = "Eirik";

// question 2

var person = {
    name: "Eirik",
    age: 32
}

// question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// question 4

var numbers = [5, 7, 13, 24, 50];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// question 5

for (var i = 15; i < 26; i++) {
    console.log(i);
}

// question 6

for (var i = 15; i < 26; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// question 7

var cars = [{
    brand: "Ford",
    price: 450000,
    isSold: false
}, {
    brand: "Volvo",
    price: 650000,
    isSold: true
}];

for (var i = 0; i < cars.length; i++) {
    console.log("Price: " + cars[i].price);
    console.log("Sold: " + cars[i].isSold);
}

// question 8

function whatIDontLike(input) {
    console.log("I don't like " + input);
}

whatIDontLike("cold weather");

// question 9

function subtract(numberOne, numberTwo) {
    console.log(numberOne - numberTwo);
}

subtract(50, 25);

// question 10

var array = [];

function addToArray(item) {
    var length = array.push(item);
    console.log(array[length - 1]);
}

addToArray("Cake");
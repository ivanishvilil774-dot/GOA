//1
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Watermelon",
    "Peach"
];


console.log(fruits.some(fruit => fruit.length > 10))


//2 

const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
    console.log(index, value);
});


// 3

const words = ["apple", "banana", "cherry", "grape"];
const uppercased = words.map(word => word.toUpperCase());
console.log(uppercased);

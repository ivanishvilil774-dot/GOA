// 2
const myarry = [21,2,1,3,45,23]
console.log(myarry.reverse())

// 3 

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Grapes",
    "Watermelon",
    "Peach",
    "Cherry"
];

console.log(fruits.reverse())

// 4 
const word = ["o","l","l","e","h"]
console.log(word.reverse().join(""))

// 5 

const numbers = [2,3,5,3,4,12,3]
console.log(Math.max(...numbers))


// 6 

const words = ["apple", "banana", "cherry", "mango", "grape", "orange", "peach", "kiwi", "melon", "pear"];
console.log(words.reverse().join(","))

// 7 
const fruits2= ["apple", "banana", "cherry", "mango"];
fruits2.shift();
console.log(fruits2); 

//8
const numbers2 = [10, 20, 30, 40];
numbers2.shift();
console.log(numbers2); 

// 9
const colors = ["red", "green", "blue"];
const removed = colors.shift();
console.log(removed); 
console.log(colors); 

// 10
const animals = ["dog", "cat", "lion", "tiger"];

while (animals.length > 0) {
    console.log(animals.shift());
    console.log(animals)
}


// 11 

const fruits3 =  ["apple", "banana", "cherry", "mango", "grape", "orange", "peach", "kiwi", "melon", "pear"];
console.log(fruits3.join(","))

// 12 

const numebrs3 = [2,3,5,3,4,12,3]
console.log(numebrs3.join(" "))

// 13 

const words2 = ["dog", "cat", "lion", "tiger"]
console.log(words2.join("-"))


// 14 

const words3 = ["dog", "cat", "lion", "tiger"];
console.log(words3.join(""))

// 15 

const names = ["gela", "gio", "luka", "saba"]
console.log(names.join(" | "))


// 16 

const numbers4 = 2
console.log(Math.abs(numbers4))

// 17 
const numbers5 = -235792384
console.log(Math.abs(numbers5))

// 18 

const numbers6 = [-3,-2354, 12,3,54.3,-235,]
for(let i = 0; i < numbers6.length; i++){
    console.log(Math.abs(i))
}


console.log("-------------------------")
// 19

const a = 5
const b = 10
console.log(Math.abs(a - b))

// 20
let num = -42;
let distanceFromZero = Math.abs(num);
console.log(distanceFromZero);


// 21

const num2 = 3.3;
console.log(Math.round(num2))


// 22

const num3 = -3.3;
console.log(Math.round(num3))


console.log("------------")

// 23 

const numofarrays = [1.2, 3.7, 4.5, 6.9, 2.1, 5.5];
for(let i = 0; i < numofarrays.length; i++){
    console.log(Math.round(numofarrays[i]))
}



// 24

let a1 = 10;
let b1 = 3;
let result = Math.round(a1 / b1);
console.log(result);

// 25 
let price = 100.5
let tax = 2.99
console.log(Math.round(price + tax))

// 26 

const num4 = [3,41]
console.log(Math.max(...num4))

// 27
const num5 = [212,43,213]
console.log(Math.max(... num5))


// 28

const num6 = [2,4,1,2,423,4,1234,53,]
console.log(Math.max(...num6))

// 29

const numbers7 = [3, 12, 7, 45, 9];
const largest = Math.max(...numbers7);
console.log(largest); 

// 30
const numbers8 = [-10, 23, -5, 0, 17, -42];
const largest1 = Math.max(...numbers8);
console.log(largest1); // 23

// 31

let c = 4 
let d = 1
console.log(Math.min(c,d))

// 32

let e = 4 
let f = 32
console.log(Math.min(e, f))

// 38 
const numbers0 = [8, 3, 15, 1, 9];

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findMin(numbers0));

// 39
const positiveNumbers = [4, 9, 2, 11, 6];
const smallest = Math.min(...positiveNumbers);
console.log(smallest); 

// 40

const mixedNumbers = [3, -7, 12, -2, 5];
const smallest2 = Math.min(...mixedNumbers);
console.log(smallest2);

// 41 
console.log(Math.pow(2, 3))

// 42
console.log(Math.pow(5, 0.5))

// 43 

let num7 = 2
console.log(Math.pow(num7, 3))

// 44 
let base = 3;
let exponent = 4;
console.log(Math.pow(base, exponent));



// 45 

const nums = [2,3,4,2,42,4]
for(let i = 0; i < nums.length; i++){
    console.log(Math.pow(nums[i], 2))
}

// 46

console.log(Math.trunc(12.987))

// 47 

console.log(Math.trunc(Math.floor(-45.67)))

// homework 1

let values = [10, 20, 30, 40, 50];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}


// homework 2

let numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("ჯამი არის:", sum);


// homework 3

let fruits = ['apple', 'cherry', 'strawberry', 'apple', 'orange'];
let count = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'apple') {
        count++;
    }
}

console.log("'apple' ხილი შეგხვდათ", count, "ჯერ");


// homework 4



let nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
    let square = nums[i] ** 2;
    console.log(nums[i] + " კვადრატში არის " + square);
}



// homework 5 


let names = ['Nino', 'Alice', 'Charlie'];

for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

// 7
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num * 2); 
});

//8

let names = ["ანა", "ლევან", "გიორგი"];
names.forEach(function(name) {
    console.log("გამარჯობა, " + name + "!");
});

// 9 
let words = ["apple", "banana", "cherry"];
words.forEach(function(word) {
    let reversed = word.split('').reverse().join('');
    console.log(reversed);
});

// 10

let nums = [1, 2, 3, 4, 5, 6];
nums.forEach(function(num) {
    if (num % 2 === 0) {
        console.log(num + " არის ლუწი");
    } else {
        console.log(num + " არის კენტი");
    }
});


// 11

let cities = ["თბილისი", "ბათუმი", "ქუთაისი"];
cities.forEach(function(city) {
    console.log(city + " - სიგრძე: " + city.length);
});



// 12

let numberss = [1, 2, 3, 4];
let doubled = numberss.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]

// 13

let namess = ["nika", "tamo", "dato"];
let upperNames = namess.map(function(name) {
    return names.toUpperCase();
});
console.log(upperNames);


// 14

let fruits = ["apple", "banana", "cherry"];
let firstLetters = fruits.map(function(fruit) {
    return fruit[0];
});
console.log(firstLetters); // ['a', 'b', 'c']



//15 

let numss = [10, 20, 30];
let plusFive = nums.map(function(num) {
    return num + 5;
});
console.log(plusFive); // [15, 25, 35]

// 16

let wordss = ["hello", "world", "javascript"];
let lastLetters = wordss.map(function(word) {
    return word[word.length - 1];
});
console.log(lastLetters); // ['o', 'd', 't']


//17

function myForEach(array, callback) {
  // გადაუვლის თითოეულ ელემენტს
    for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array); 
    // გადაცემული ფუნქცია იღებს ელემენტს, ინდექსს და მთელ მასივს
    }
}

// გამოყენება:
myForEach([1, 2, 3], function(item) {
  console.log(item * 2);
});


// 18

const aray = ["luka", 'nika', 'gio']

const greating = aray.map((name) =>  `hello ${name}`);

console.log(greating);


/*
forEach:
- გამოიყენება მასივზე წარსვლად
- არ აბრუნებს ახალ მასივს
- პირდაპირ ასრულებს ფუნქციას თითოეული ელემენტისთვის

map:
- აბრუნებს ახალ მასივს
- გარდაქმნის თითოეულ ელემენტს და ინახავს ახალ მასივში
- გამოიყენება მაშინ, როცა საჭიროა მონაცემების შეცვლა/გარდაქმნა

მაგალითი:

let nums = [1, 2, 3];

nums.forEach(n => console.log(n * 2));
// არ ქმნის ახალ მასივს, უბრალოდ ბეჭდავს

let newNums = nums.map(n => n * 2);
// ქმნის ახალ მასივს [2, 4, 6]
*/

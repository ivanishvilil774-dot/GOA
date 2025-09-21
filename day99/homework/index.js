// 2
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(stringArray.find(fruit => fruit.startsWith("a"))); 

// 3
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 32 },
    { name: "Diana", age: 29 },
    { name: "Ethan", age: 35 }
];

// 4
console.log(users.find(user => user.age > 30)); 

const words = ["hello", "world", "javascript", "is", "fun"];
console.log(words.find(word => word.length > 5)); 

// 5
const products = [
    { name: "Laptop", price: 999 },
    { name: "Headphones", price: 49 },
    { name: "Notebook", price: 15 },
    { name: "Pen", price: 5 },
    { name: "Backpack", price: 45 }
];

console.log(products.find(product => product.price < 20)); 

// 6
const students = [
    { name: "Luka", grade: "B" },
    { name: "Maya", grade: "C" },
    { name: "Nino", grade: "A" },
    { name: "Giorgi", grade: "B" },
    { name: "Sandro", grade: "A" }
];

console.log(students.find(student => student.grade === "A")); 

// 7
const numbers = [10, -3, 45, 67, 89, 12, 34, 56];
console.log(numbers.find(number => number < 0)); 

// 8
const words1 = ["cat", "run", "playing", "house", "jumping", "dog"];
console.log(words1.find(word => word.endsWith("ing")));

// 9
const users1 = [
    { name: "Ana", isActive: false },
    { name: "Luka", isActive: false },
    { name: "Maya", isActive: true },
    { name: "Giorgi", isActive: false },
    { name: "Nino", isActive: true }
];

console.log(users1.findIndex(user => user.isActive === true)); 

// 10
const fruits = ["Apple", "Kiwi", "Mango", "Peach", "Grape", "Banana"];
console.log(fruits.findIndex(fruit => fruit.length === 5));

// 11
const numbers2 = [45, 60, 150, 85, 200, 99, 120];
console.log(numbers2.filter(number => number > 100).pop()); 

// 12
const word2 = ["hello", "world", "javascript", "is", "fun", "Eve"];
console.log(word2.find(word => word.endsWith("e"))); 

// 13
const users2 = [
    { name: "Ana", age: 28 },
    { name: "Luka", age: 22 },
    { name: "Maya", age: 30 },
    { name: "Giorgi", age: 20 },
    { name: "Nino", age: 24 }
];

console.log(users2.filter(user => user.age < 25).pop());

// 14
const numbers4 = [3, 7, 12, 19, 25, 30, 42, 55];
console.log(numbers4.filter(number => number % 2 === 0).pop());

// 15
const words2 = ["cat", "apple", "vowel", "orange", "banana", "umbrella", "elephant", "dog"];
console.log(words2.filter(word => /^[aeiou]/i.test(word)).pop()); 

// 16
const numbers5 = [10, 65, 30, 80, 45, 90, 20];
const lastIndex = numbers5.findLastIndex(num => num > 50);
console.log(lastIndex); 

// 17
const words3 = ["sky", "cloud", "rain", "sun", "wind", "storm", "fog", "snow"];
console.log(words3.findLastIndex(word => word.startsWith("s"))); 

// 18
const users3 = [
    { name: "Ana", isActive: false },
    { name: "Luka", isActive: true },
    { name: "Maya", isActive: false },
    { name: "Giorgi", isActive: true },
    { name: "Nino", isActive: false }
];
console.log(users3.findLastIndex(user => user.isActive)); 

// 19
const numbers6 = [10, 25, 40, 55, 70, 85, 100, 3, 115, 9];
console.log(numbers6.findLastIndex(num => num % 3 === 0));

// 20
const words4 = ["table", "chair", "sofa", "desk", "shelf", "cabinet", "lamp"];
console.log(words4.findLastIndex(word => word.length === 4));

// 21
const numbers7 = [10, 15, 20, 25, 30, 35];
console.log(numbers7.indexOf(25));

// 22
const fruits1 = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits1.indexOf("apple"));

// 23
const letters = ["b", "c", "a", "d", "a", "e"];
console.log(letters.indexOf("a"));

// 24
const animals = ["dog", "cat", "rabbit", "hamster", "parrot"];
console.log(animals.indexOf("cat"));

// 25
const numbers8 = [5, 10, 15, 20, 25, 30];
console.log(numbers8.lastIndexOf(100));

// 26
const numbers9 = [1, 2, 3, 4, 5, 3, 2, 1, 10, 10];
console.log(numbers9.lastIndexOf(10));

// 27
const fruits2 = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "apple"];
console.log(fruits2.lastIndexOf("apple"));

// 28
const letters1 = ["a", "b", "c", "d", "e", "c", "b", "a"];
console.log(letters1.lastIndexOf("b"));

// 29
const animals1 = ["lion", "tiger", "bear", "wolf", "fox", "bear", "eagle", "dog", "dog"];
console.log(animals1.lastIndexOf("dog"));

// 30
const numbers10 = [3, 0, -2, 5, 0, 7, 0, -1];
console.log(numbers10.lastIndexOf(0));

// 31
const numbers11 = [10, 20, 30, 40, 50];
console.log(numbers11.pop());

// 32
const fruits3 = ["apple", "banana", "cherry", "date"];
console.log(fruits3.pop());

// 33
const fruits4 = ["apple", "banana", "cherry", "date"];
while (fruits4.length > 0) {
    console.log(fruits4.pop());
}

// 34
const numbers14 = [10, 20, 30, 40, 50];
console.log(numbers14.pop());

// 35
const arr1 = [1, 2, 3, 4, 5];
arr1.splice(0, 2);
console.log(arr1);

// 36
const fruits5 = ["apple", "banana", "cherry", "date"];
fruits5.splice(2, 0, "orange", "grape");
console.log(fruits5);

// 37
const fruits6 = ["apple", "banana", "orange", "grape", "cherry"];
fruits6.splice(3, 1, "mango");
console.log(fruits6);

// 38
const numbers17 = [10, 20, 30, 40, 50, 60];
numbers17.splice(-3);
console.log(numbers17);

// 39
const numbers110 = [1, 2, 3, 4, 5];
numbers110.splice(2, 0, 99);
console.log(numbers110);

// 40
const users4 = [
    { name: "Ana" },
    { name: "Luka" },
    { name: "Maya" }
];
console.log(users4.pop());

// 41
const numbers13 = [10, 20, 30, 40, 50];
const removedNumber = numbers13.pop();
console.log(removedNumber);

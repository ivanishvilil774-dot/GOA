/// 1
const numbers = [10, -3, 25, -8, 0, 14, -21];
const minNUm = numbers.some(num => num < 0)
console.log(minNUm)

/// 2
const numbers1 = [2, 32, 12, 4, 12, 3, 3, 21];  
const evenNum = numbers1.some(num1 => num1 % 2 === 0);
console.log(evenNum);


/// 3 
const words = ["apple", "cat", "banana", "dog", "elephant"];
const hasLongWord = words.some(word => word.length > 5);
console.log(hasLongWord);


/// 4 
const values = [10, "hello", 0, true, null, "world"];
const hasFalsy = values.some(value => !value);
console.log(hasFalsy); 

// 5 
const numbers2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const primes = [];
const nonPrimes = [];

for (let i = 0; i < numbers2.length; i++) {
    let num = numbers2[i];
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primes.push(num);
    } else {
        nonPrimes.push(num);
    }
}

console.log(primes);
console.log(nonPrimes);

//  6
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

days.forEach(day => console.log(day));

console.log(days);


//  7
const numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
});

/// 8
const numbers4 = [10, 15, 20, 25, 30];
let sum = 0; 
numbers4.forEach(num => {
    sum += num;
});
console.log(sum); 

// 9
const words4 = ["hello", "world", "javascript", "coding"];

words4.forEach(word => {
    console.log(word.toUpperCase());
}); 

// 10
const usersinfo = [{name: "Alice"}, {name: "Bob"}];

usersinfo.forEach(user => {
    console.log(user.name);
});

console.log(usersinfo);

// 11
const numbers5 = [1, 2, 3, 4, 5];
const squareNumbers = numbers5.map(num => num * num);
console.log(squareNumbers);

// 12 

const numbers6 = [1, 2, 3, 4, 5];
const MultiplieNumers = numbers6.map(num => num * 2);
console.log(MultiplieNumers);

// 13
const words5 = ["hello", "world", "javascript"];
const upperCaseWords = words5.map(word => word.toUpperCase());
console.log(upperCaseWords);

// 14
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
]
const userNames = users.map(user => user.name);
console.log(userNames);

// 15 
const numbers7 = [1, 2, 3, 4, 5];
const addTenToNumbers = numbers7.map(num => num + 10);
console.log(addTenToNumbers);
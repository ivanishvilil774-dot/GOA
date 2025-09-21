// 1. JavaScript Concepts explained in comments

/*
JavaScript არის მაღალდონიანი, დინამიურად ტიპიზირებული, scripting ენა, რომელიც გამოიყენება ვებ-გვერდების ინტერაქტიურობისთვის.

მ
მონაცემთა ტიპები:
- Number 
- String
- Boolea


კონკატენაცია (Concatenation): ორი სტრინგის გაერთიანება + ოპერატორით.
String Literal (Template Literal): ბექტიკებით (` `) და ${} სინდაქსით.

კუთვნილებები (Properties): ობიექტის მახასიათებლები.
მეთოდები (Methods): ობიექტის ფუნქციები.

ჩაშენებული ობიექტები: Math, Date, Array, String და სხვ.

ცვლადები: var, let, const .

Conditional statements: if, else if, else.

ლოგიკური ოპერატორები: && (და), || (ან), ! (უარყოფა).

*/


// 2. Leap Year Checker
function checkLeapYear(userInput) {
    // leap year conditions: divisible by 4 and not by 100, or divisible by 400
    if ((userInput % 4 === 0 && userInput % 100 !== 0) || (userInput % 400 === 0)) {
        console.log(`The ${userInput} is leap year`);
    } else {
        console.log(`The ${userInput} is not a leap year`);
    }
}


checkLeapYear(2020);
checkLeapYear(2023);


// 3. Number Sign and Type Checker
function checkNumberType(num) {
    if (num > 0) {
        console.log("Positive number");
    } else if (num < 0) {
        console.log("Negative number");
    } else {
        console.log("Zero");
    }

    if (!Number.isInteger(num)) {
        console.log("Decimal number");
    } else {
        console.log("Integer number");
    }
}

checkNumberType(10);


// 4. Simple Calculator
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
        console.log(num1 + num2);
        break;
        case '-':
        console.log(num1 - num2);
        break;
        case '*':
        console.log(num1 * num2);
        break;
        case '/':
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(num1 / num2);
        }
        break;
        default:
        console.log("Unknown operator");
    }
}

// Example:
calculator(5, 3, '+');



// 5. Count Even and Odd numbers in an Array
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    arr.forEach(num => {
        if (num % 2 === 0) evenCount++;
        else oddCount++;
    });
    console.log(`Even numbers: ${evenCount}, Odd numbers: ${oddCount}`);
}

countEvenOdd([1, 2, 3, 4, 5, 6]);


// 6. Prime Number Checker
function isPrime(num) {
    if (num <= 1) {
        console.log(`${num} is not a prime number`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        console.log(`${num} is not a prime number`);
        return;
        }
    }
    console.log(`${num} is a prime number`);
}


isPrime(18);


// 7. 
function isPalindrome(str) {
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // clean string
    let reversedStr = cleanStr.split('').reverse().join('');
    if (cleanStr === reversedStr) {
        console.log(`"${str}" is a palindrome`);
    } else {
        console.log(`"${str}" is not a palindrome`);
    }
}


isPalindrome("Anna");



// 8. isLoggedIn array & Ternary operator
function checkLoginStatus(statusArray) {
    statusArray.forEach(status => {
        console.log(status ? "Welcome" : "Please Log In");
    });
}


checkLoginStatus([true, false, true]);


// 9. Time-based Greeting (Ternary operator)
function greetByTime(hour) {
    // assume hour in 0-23
    let greeting = (hour < 12) ? "Good Morning" : "Good Evening";
    console.log(greeting);
}


greetByTime(10);
greetByTime(20);


// 10. Switch Examples

// a) Days of week by number
function dayOfWeek(num) {
    switch (num) {
        case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
        console.log("Invalid day number");
    }
}

// b) Grade evaluation
function gradeEval(grade) {
    switch (true) {
        case (grade >= 90):
        console.log("A");
        break;
        case (grade >= 80):
        console.log("B");
        break;
        case (grade >= 70):
        console.log("C");
        break;
        case (grade >= 60):
        console.log("D");
        break;
        default:
        console.log("F");
    }
}

// c) Simple menu selector
function menuSelect(option) {
    switch (option) {
        case 'a':
        console.log("You selected Option A");
        break;
        case 'b':
        console.log("You selected Option B");
        break;
        case 'c':
        console.log("You selected Option C");
        break;
        default:
        console.log("Invalid option");
    }
}

// d) Traffic light signals
function trafficLight(color) {
    switch (color.toLowerCase()) {
        case 'red':
        console.log("Stop");
        break;
        case 'yellow':
        console.log("Get Ready");
        break;
        case 'green':
        console.log("Go");
        break;
        default:
        console.log("Invalid color");
    }
}


dayOfWeek(3);
gradeEval(85);
menuSelect('b');
trafficLight('green');



// 11) Traffic light color to action
function trafficAction(color) {
    switch (color.toLowerCase()) {
        case 'red':
        console.log('stop');
        break;
        case 'yellow':
        console.log('slow');
        break;
        case 'green':
        console.log('go');
        break;
        default:
        console.log('Unknown color');
    }
}
// trafficAction('red'); // stop


// 12) Filter active users from users object array
const users = [
    { name: "Anna", isActive: true },
    { name: "Bob", isActive: false },
    { name: "John", isActive: true }
];

const activeUsers = users.filter(user => user.isActive === true);
// console.log(activeUsers);


// 13) Remove duplicate values using indexOf
const arrWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
const uniqueArr = arrWithDuplicates.filter((item, index, self) => {
    return self.indexOf(item) === index;
});
console.log(uniqueArr);


// 14) Convert string array to lowercase and remove spaces using map
const strings = [" Hello ", "WORLD ", " JavaScript "];
const cleanedStrings = strings.map(str => str.toLowerCase().trim());
console.log(cleanedStrings);


// 15) Count occurrences using reduce
const elements = ['a', 'b', 'a', 'c', 'b', 'a'];
const countOccurrences = elements.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},);
console.log(countOccurrences);


// 16) some() - check if any user is over 18
const usersAges = [
    { name: "Anna", age: 17 },
    { name: "Bob", age: 21 },
    { name: "John", age: 16 }
];
const hasAdult = usersAges.some(user => user.age > 18);
console.log(hasAdult); 


// 17) some() - check if any object has undefined value
const objArr = [
    { a: 1, b: 2 },
    { a: 3, b: undefined },
    { a: 4, b: 5 }
];
const hasUndefinedValue = objArr.some(obj => {
    return Object.values(obj).some(val => val === undefined);
});
// console.log(hasUndefinedValue); // true


// 18) Group users by age ranges using reduce
const userList = [
    { name: "Anna", age: 25 },
    { name: "Bob", age: 32 },
    { name: "John", age: 18 },
    { name: "Mike", age: 42 },
    { name: "Sara", age: 27 }
];

const groupedByAge = userList.reduce((acc, user) => {
    const group = `${Math.floor(user.age / 10) * 10}-${Math.floor(user.age / 10) * 10 + 9}`;
    if (!acc[group]) {
        acc[group] = [];
    }
    acc[group].push(user);
    return acc;
}, {});
console.log(groupedByAge);


// 19) Print object keys and values with for-in
const obj = { name: "Anna", age: 25, city: "Tbilisi" };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


// 20) Add, delete, and update properties in an object
const person = { name: "John", age: 30 };
person.city = "New York";    
delete person.age;           
person.name = "Mike";        
console.log(person);


// 21) Merge two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = {obj1, obj2 };
console.log(mergedObj); 


// 22) Sort array of people by age ascending
const people = [
    { name: "Anna", age: 25 },
    { name: "Bob", age: 32 },
    { name: "John", age: 18 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);


// 23) Reverse array without reverse()
const numbers = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
console.log(reversed);


// 24) Sum array numbers with for...of
const nums = [10, 20, 30, 40];
let sum = 0;
for (const num of nums) {
    sum += num;
}
console.log(sum);



// 25) დაითვალეთ string - ის ხმოვანების რაოდენობა for...of-ით
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) count++;
    }
    console.log(`Vowels count: ${count}`);
}
countVowels("Hello World");


// 26) საგნების ქულების ჯამი Object.values() + reduce-ით
const subjects = {
    math: 90,
    physics: 85,
    chemistry: 88,
    biology: 92
};
const totalScore = Object.values(subjects).reduce((sum, val) => sum + val, 0);
console.log(totalScore); 


// 27) true თუ ყველა ობიექტის მნიშვნელობა არის რიცხვი
const numbersObj = { first: 1, second: 2, third: 3 };
function areAllValuesNumbers(obj) {
    return Object.values(obj).every(val => typeof val === 'number');
}
console.log(areAllValuesNumbers(numbersObj)); 


// 28) შეამოწმეთ არის თუ არა ცვლადი ობიექტში არსებული ქალაქი
const place = { country: 'Georgia', city: 'Tbilisi' };
const cityToCheck = 'Tbilisi';
function isCityInObject(obj, city) {
    return Object.values(obj).includes(city);
}
console.log(isCityInObject(place, cityToCheck)); 


// 29) იპოვეთ ყველაზე დიდი string მასივში
const stringArr = ['apple', 'banana', 'pear', 'watermelon'];
function longestString(arr) {
    return arr.reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestString(stringArr));


// 30) იპოვეთ მასივში მხოლოდ უნიკალური (ერთჯერადი) რიცხვები
const numsArr = [1, 2, 3, 2, 4, 3, 5];
function uniqueOnce(arr) {
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
}
console.log(uniqueOnce(numsArr)); 


// 31) HTML: ერთი ღილაკი და Count პარაგრაფის მნიშვნელობის ზრდა

const btn = document.getElementById('btnCount');
const p = document.getElementById('count');
btn.addEventListener('click', () => {
    p.textContent = Number(p.textContent) + 1;
});



// 32) HTML: ღილაკი, წითელი ფერის ახალი ელემენტის შექმნა

const btnAdd = document.getElementById('btnAdd');
const container = document.getElementById('container');
btnAdd.addEventListener('click', () => {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'red';
    div.style.margin = '5px';
    container.appendChild(div);
});




// 33) ფუნქცია - ყველაზე დიდი რიცხვის დაბრუნება მასივიდან
function maxNumber(arr) {
    return Math.max(rr);
}
console.log(maxNumber([5, 9, 2, 7])); 


// 34) ფუნქცია - პირველ ასოს დიდი ასოდ გადაქცევა თითოეულ string-ში
function capitalizeFirstLetter(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}
console.log(capitalizeFirstLetter(['apple', 'banana'])); 


// 35) ფუნქცია - რამდენჯერ გვხვდება ასო string-ში
function countChar(str, char) {
    let count = 0;
    for (const c of str) {
        if (c === char) count++;
    }
    return count;
}
console.log(countChar("banana", "a"));


// 36) reduce-დის გარეშე მასივის რიცხვების ჯამის დაბრუნება ფუნქციით
function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); 


// 37) ფუნქცია - ყველა ელემენტი ლუწია თუ არა (every-ს გარეშე)
function allEven(arr) {
    for (const num of arr) {
        if (num % 2 !== 0) return false;
    }
    return true;
}
console.log(allEven([2, 4, 6])); 


// 38) ფუნქცია - ყველაზე დიდი რიცხვის ინდექსი
function maxIndex(arr) {
    let maxIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx]) maxIdx = i;
    }
    return maxIdx;
}
console.log(maxIndex([3, 7, 2, 9, 5])); 

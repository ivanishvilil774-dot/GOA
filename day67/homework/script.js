//1
const numbers = [-10, -5, 0, 7, 15];
const positiveIndex = numbers.findIndex(num => num > 0);
console.log(positiveIndex); 


//2
function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;


    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

//3 
const prices = [10, 20, 30];

const total = prices.reduce((beforeNum, afterNum) => beforeNum + afterNum);

console.log(total); 


// 3


const nums = [2,4,]

let re = nums.reduce((sum, num)=> num + sum);


console.log(re)




const values = [5, 7];

let totalSum = values.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(totalSum); 


const letters = ['J', 'S'];

let word = letters.reduce((joined, char) => joined + char);

console.log(word);


// 4


function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // თუ საწყისი მნიშვნელობა არ არის გადმოცემული
    if (initialValue === undefined) {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

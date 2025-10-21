//1 

const numbers = [6, 124, 324, 21, 235235];

const newNumbers = numbers.map(num => num % 2 === 0 ? num + 10 : num - 10);
console.log(newNumbers);

const sum = (n1, n2, n3, n4, n5) => {
    return n1 + n2 + n3 + n4 + n5;
};

console.log(sum(...numbers));


// 2
function findLargest(...numbers) {
    let largest = numbers[0];

    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(findLargest(5, 10, 3, 22, 8));

// 3


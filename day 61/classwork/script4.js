function filter() {
    let numbers = [3, 6, 8, 1, 9, 12, 14, 7];
    let filteredArr = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            filteredArr.push(numbers[i]);
        }
    }

    return filteredArr;
}

console.log(result); // [6, 8, 12, 14]

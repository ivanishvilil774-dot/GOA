
//1

function reverseArray(arr) {
    let Array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        Array[Array.length] = arr[i];
    }
    return Array;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers)); 


//2
const countSpaces = function(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
        count = count + 1;
        }
    }
    return count;
};

let sentence = "luka luka luka";
console.log(countSpaces(sentence));


// 3

const filter = function(arr, helper){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(helper(arr[i]) === true) {
            result.push(arr[i])
        }
    }

    return result;
}


const includesI = function(value) {
    return value.includes('i');
}

const names = ["Luka", "Lile", "Nia"];

const filteredArr = filter(names, includesI);

console.log(filteredArr)




// 4
const greet = () => "hello world";
console.log(greet());


// 5

const name = name =>{`hello ${name}`};
console.log(name('Luka'));

// 6

const filterArray = (arr, num) => {
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== num) {
            result[result.length] = arr[i];
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
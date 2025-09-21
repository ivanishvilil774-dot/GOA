// Higher Order Function არის ფუნქცია რომელიც იღებს ფუნქციას პარამეტრად ან აბრუნებს ფუნქციას
function greet(name) {
    console.log("Hello " + name);
}

function higherOrderFunction(callback) {
    callback("Luka");
}

higherOrderFunction(greet);


// 2


function outerFunction() {
    return function() {
        console.log("hello");
    };
}

const returnedFunction = outerFunction();

returnedFunction(); 


// 3


let num = [1,2,3,4,5];

num.forEach(function(item) {
    console.log(item);
});

// 4

const numbers = [10, 20, 30];
function manualForEach (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
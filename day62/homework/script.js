// homework 1


let myArray = [10, 20, 30, 40, 50];
let index = 0;

while (index < myArray.length) {
    console.log(myArray[index]);
    index++;
}


// homework 2

let num = 8;

do{
    console.log("the number is " + num)
    num--
}while(num > 0)



// homework 3

let num2 = 30;

while (num2 > 0) {
    if (num2 % 3 === 0) {
        console.log(num2);
    }
    num2--;
}


// homework 4

let word = "ლუკა";       
let index3 = 0;            
let count = 0;         

while (index3 < word.length) {
    if (word[index3] === 'ა') {
        count++;          
    }
    index++;            
}

console.log("Number of 'ა's:", count);


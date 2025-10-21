// 3 

const num1 = 4 
console.log( num1%2 === 0 ? "even" : "odd")

// 4 

const firstNum = 5 
const secondNum = 9
console.log(firstNum > secondNum ? firstNum : secondNum)

// 5 

const age = 20
console.log(age > 18 ? "Eligible" : "Not Eligible")

// 6 

const number = -3;
const result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);


// 7 
const arr1 = [1,2,43,41,421]
const arr2 = ["luka", "ivcanishvili"]

const newarr = [...arr1, ...arr2]
console.log(newarr)

// 8 

const person = {
    name: "Luka",
    age: 15,
    city: "Tbilisi"
};

const updatedPerson = {...person, age:17}

console.log(person)
console.log(updatedPerson)


// 9


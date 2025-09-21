// 1

const countWords = sentens => sentens.trim().split(" ").length

const cw = sentence => sentence.trim().split(" ").length;

console.log(cw("dbsifb idesbf ibwbe i"));
console.log(countWords("bdskb dsoifgh ewuh uobweu oi"));


// 2

const array = [1, 2, 123, 23, "luka", "dkjf"];

const allStrings = array.every(item => typeof item === "string");

console.log(allStrings); 


// 3 
const user = [
    { name: "Alice", status: "active" },
    { name: "Bob", status: "active" },
    { name: "Charlie", status: "inactive" }
];

console.log(user.every(user => user.status === "active"));


// 5
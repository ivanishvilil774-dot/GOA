const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // შედეგი: 15



const words = ["Hello", "world", "from", "reduce"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); // შედეგი: "Hello world from reduce"



const wordss = ["cat", "giraffe", "elephant", "dog"];
const longest = wordss.reduce((acc, word) => {
    return word.length > acc.length ? word : acc;
}, "");
console.log(longest); 

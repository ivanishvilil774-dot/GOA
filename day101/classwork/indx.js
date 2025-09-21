let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"



/// 1
const absFunction = num => {
    if (num > 0) {
        return num;
    } else {
        return num * -1;
    }
};

console.log(absFunction(-10)); // 10
console.log(absFunction(7));   // 7


//2 

for (let i = 1; i <= 5; i++) {
    console.log(10 ** i);
}

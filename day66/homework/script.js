// 1 

const nums = [12, 43, 54, 1, 4, 5,]

const filterd = nums.filter(num => num > 10)

console.log(filterd)

// 2 

const negativenums = [-21, 40, 10, -1, 50, -300]

const negativenum = negativenums.filter(numss => numss > 0)

console.log(negativenum)


// 3

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

const filterdfruits = fruits.filter(frut => frut[0] == "A")

console.log(filterdfruits)


// 4 

const myStrings = ["Laptop", "Chair", "car"];


const filterdStrings = myStrings.filter(string => string.length === 3)

console.log(filterdStrings)


// 5 

const evenAndoddNums = [2, 3, 6, 1, 90, 125,]

const TrueOrFalse = evenAndoddNums.map(numss => numss % 2 === 0);

console.log(TrueOrFalse)


// 6

const toStrings = [2,3,6,4,2,212,42,344]

const stringNums = toStrings.map(toStringNums => toStringNums.toString())

console.log(stringNums)



// 7


// forEach გამოიყენება მასივის თითოეული ელემენტისთვის მოქმედების შესასრულებლად.

// map გამოიყენება მასივის ელემენტების ტრანსფორმაციისთვის (შეცვლისთვის).

// filter გამოიყენება მასივის ელემენტების გაფილტვრაზე — მხოლოდ ის ელემენტები დარჩება,

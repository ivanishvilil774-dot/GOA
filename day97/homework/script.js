//1 
const data = "2025-08-17"
console.log(data.split("-"))
//2
const numbersINString = "one two three four five"
console.log(numbersINString.split(" "))
//3
const deta = "John,Doe,25,Developer";
console.log(deta.split(","))
//4
const abc = "abs";
console.log(abc.split(""))
//5
const word =  "JavaScript is fun";
console.log(word.split(" ")[1])
//6
const chek = (word2) => {
    if (word2.startsWith("Hello")) {
        console.log(true);
    } else {
        console.log(false);
    }
};

chek("Hello world");
chek("hello world");   

//7
const filename  = (word3) => {
    if(word3.startsWith("img_")){
        console.log("Image file")
    }else{
        console.log("Not an image file")
    }
}

filename("img_cat.png"); 
filename("img_dog.jpg");   
filename("video.mp4");   
filename("document.pdf");  
filename("img_123.jpeg");  

//8

const story = (storyy) => {
    if(storyy.startsWith("Once upon")){
        console.log(true)
    }else{
        console.log(false)
    }
}

story("Once upon tioiasdnfjn")
story("tioiasdnfjn")

// 9

const checkStartsWith = (str, sub, pos) => {
    if (str.startsWith(sub, pos)) {
        console.log(`Yes, "${str}" starts with "${sub}" at position ${pos}`);
    } else {
        console.log(`No, "${str}" does not start with "${sub}" at position ${pos}`);
    }
};

// Examples:
checkStartsWith("JavaScript is fun", "Script", 4);  // ✅ Yes
checkStartsWith("JavaScript is fun", "fun", 10);    // ❌ No

//10

const countDoctors = (names) => {
    return names.filter(name => name.startsWith("Dr.")).length;
};

const people = [
    "Dr. Strange",
    "Tony Stark",
    "Dr. Who",
    "Bruce Wayne",
    "Dr. Watson"
];

console.log(countDoctors(people)); 
//11

const removeSpaces = (word4) => {
    console.log(word4.trimStart());
} 

removeSpaces("           sssssss ")
removeSpaces("sssssssssss        ")

//12 

const str1 = "   JavaScript";
const cleaned1 = str1.trimStart();

console.log(cleaned1);

//13 

const str2 = "Hello World   ";
const cleaned2 = str2.trimEnd();

console.log(cleaned2); // "Hello World"

// 14
const cleanUsernames = (usernames) => {
    return usernames.map(username => username.trim());
};

const rawUsers = ["  Alice  ", " Bob", "Charlie   ", "   Diana   "];
console.log(cleanUsernames(rawUsers)); 


/// 15

const isEmpty = (input) => {
    return input.trim() === "";
}

console.log("      ")
console.log("daskjbfkjnsd")

//16

const students = [
    { name: "Alice", score: 75 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 40 }
];

students.forEach(student => {
    if (student.score >= 50) {
        console.log(student.name + " passed");
    } else {
        console.log(student.name + " failed");
    }
});

// 17

const numbers = [10, 20, 30, 40, 50];
let allEven = true;

for (let num of numbers) {
    if (num % 2 !== 0) {
        allEven = false;
        break;
    }
}

console.log(allEven); // true

// 18 

const emails = ["alice@example.com", "bob@gmail.com", "charlie@mail.com"];
let allValidEmails = true;

emails.forEach(email => {
    if (!email.includes("@")) {
        allValidEmails = false;
    }
});

console.log(allValidEmails);


// 19

const ages = [20, 25, 18, 30];
let allAdults = true;

ages.forEach(age => {
    if (age < 18) {
        allAdults = false;
    }
});

console.log(allAdults); 


// 20 

const prices = [45, 20, 99, 10];
let allBelow100 = true;

prices.forEach(price => {
    if (price >= 100) {
        allBelow100 = false;
    }
});

console.log(allBelow100); 

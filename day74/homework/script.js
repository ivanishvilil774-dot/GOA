// 1 
const promis1 = new Promise(function (resolve, reject) {
    const time = "8:26"; // Example time to compare

    // Get current local time in HH:MM format
    const now = new Date();
    const hours = now.getHours();      // 0-23
    const minutes = now.getMinutes();  // 0-59
    const currentTime = `${hours}:${minutes}`;

    if (time === currentTime) {
        resolve("Your time matches my current local time");
    } else {
        reject("Your time does not match to my current local time");
    }
});

promis1
    .then(message => console.log(message))
    .catch(error => console.log(error));


// 3 

const promis = new Promise(function(resolve1, reject1) {
    const num = 4;

    if (num % 2 === 0) {
        resolve1("The Number is even");
    } else {
        reject1("The Number is odd");
    }
});

promis
    .then(message => console.log(message))  
    .catch(error => console.log(error));   


// 4 

// setTimeout გამოიყენება კოდის შესასრულებლად მხოლოდ ერთხელ,
// მითითებული დროის (მილიწამებში) გასვლის შემდეგ

// setInterval გამოიყენება კოდის განმეორებით შესასრულებლად,
// ყოველ მითითებულ დროის ინტერვალზე.

// 5

setTimeout(() =>{
    console.log("Hello")
}, 5000)



// 6
setInterval(() => {
    console.log("Hello");
}, 4000);

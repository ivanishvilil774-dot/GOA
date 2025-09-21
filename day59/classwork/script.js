// ========================
// 1. Hoisting-ის ახსნა
// ========================

// Hoisting ნიშნავს იმას, რომ ფუნქციებისა და ცვლადების დეკლარაციებს "ზევით" წევს,
// ანუ სანამ კოდი შესრულდება, დეკლარაციები ავტომატურად გადადის სკოპის თავში.

console.log(hoistedVar); 
var hoistedVar = 5;

// ზემოთკომენტარიან მაგალითში, although `hoistedVar` ჯერ არ მინიჭებია, მის გამოცხადებამდე წვდომა მაინც არის — თუმცა მნიშვნელობა არის undefined.


printGreeting(); 

function printGreeting() {
    console.log("Hello");
}

// Hoisting შეიძლება იწვევდეს შეცდომებს და დაბნეულობას, რადგან ცვლადების ან ფუნქციების გამოცხადება შესაძლოა სხვაგან იყოს.


const showMessage = function () {
    console.log("Hi");
};

showMessage();


function logFarewell() {
    console.log("Bye");
}
logFarewell(); 

// Function Expression
const shoutMessage = function () {
    console.log("Hey");
};
shoutMessage(); 



// classwork2


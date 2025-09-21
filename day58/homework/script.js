// homework 1

const score = 1;

if(score < 0 || score > 100){
    console.log(`Invalid Score`)
}
else if (score == 100){
    console.log("A+")
}
else if (score >= 90){
    console.log("A");
}
else if(score >= 80){
    console.log("B")
}
else if(score >= 70){
    console.log("C")
}
else if(score >= 60){
    console.log("D")
}
else if(score >= 40){
    console.log("E")
}
else{
    console.log("F")
}

// homework 2

let movies = ["Inception", "The Matrix", "Interstellar", "The Godfather"];
let favoriteMovie = "Inception";

let message = movies.includes(favoriteMovie)
    ? "The Film That You Chose Is In The List"
    : "The Film That You Chose Is Not In The List";

console.log(message);


// homework 3

let score1 = 85;

switch (true) {
case (score1 < 0 || score1 > 100):
    console.log("Invalid Score");
    break;
case (score1 === 100):
    console.log("A+");
    break;
case (score1 >= 90):
    console.log("A");
    break;
case (score1 >= 80):
    console.log("B");
    break;
case (score1 >= 70):
    console.log("C");
    break;
case (score1 >= 60):
    console.log("D");
    break;
case (score1 >= 40):
    console.log("E");
    break;
default:
    console.log("F");
}


// homework 4

let role = "moderator";

switch (role) {
case "admin":
    console.log("You Have Full Access");
    break;
case "moderator":
    console.log("You Can Manage The Content");
    break;
case "user":
    console.log("You Can View The Content");
    break;
default:
    console.log("Access Denied or Invalid Role");
}


// homework 5

function checkOddSum(a, b, c) {
    let sum = 0;

    if (a % 2 !== 0) sum += a;
    if (b % 2 !== 0) sum += b;
    if (c % 2 !== 0) sum += c;

    return sum > 15;
}

console.log(checkOddSum(5, 7, 9));   
console.log(checkOddSum(1, 3, 5));  


// homework 6


function checkEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "The Number Is Odd";
}

checkEvenOrOdd(10); 


// homework 7

const headsButton = document.getElementById("headsBtn");
const tailsButton = document.getElementById("tailsBtn");
const resultParagraph = document.getElementById("resultParagraph");

// მოვლენის დამუშავება
headsButton.onclick = function () {
    resultParagraph.textContent = "Heads";
};

tailsButton.onclick =  function () {
    resultParagraph.textContent = "Tails";
};

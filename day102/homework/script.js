// 2
console.log(Math.random())

// 3

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}

rollDice();

// 4 

const side = ["Tails", "Heads"]
function headsorTeals() {
    const randomindex = Math.floor(Math.random() * side.length)
    const randomside = side[randomindex];


    console.log(randomside)
}

headsorTeals()

// 5 
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function passwordGenerator() {
    let password = "";
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Example usage:
console.log(passwordGenerator());


// 6 
const trueOrFalse = ["true", "false"]
function trueOrFals() {
    const randomindex = Math.floor(Math.random() * trueOrFalse.length)
    const Trueorfals = trueOrFalse[randomindex]

    console.log(Trueorfals)
}

trueOrFals()

// 7 

const randomquoutBTn = document.getElementById("randomquoutBTn")
const randomquout = document.getElementById("randomquout")

const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. – Elon Musk",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you."
];

const colors = [
  "#FF5733", // reddish
  "#33FF57", // greenish
  "#3357FF", // blueish
  "#F1C40F", // yellow
  "#8E44AD", // purple
  "#1ABC9C", // teal
  "#E67E22", // orange
  "#ECF0F1", // light gray
  "#2C3E50", // dark blue
  "#FF33A8"  // pink
];


randomquoutBTn.addEventListener('click', () => {
    // cange quotes
    const randomquoteindexs = Math.floor(Math.random() * quotes.length);
    const randomquotes = quotes[randomquoteindexs];

    randomquout.textContent = randomquotes;

    // change bacground colors 

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

})

// 8 

const today = new Date();
const dayOfMonth = today.getDate();
console.log(dayOfMonth); 


// 9

const birthday = new Date(2025, 6, 6); // 17 September 2025
const birthdayDay = birthday.getDate();
console.log(birthdayDay); // 17


// 10

const today2= new Date();
const todayDay = today.getDate();

if(todayDay === 1) {
    console.log("Today is the first day of the month!");
} else {
    console.log("Today is not the first day of the month.");
}

// 11
const todaysweak = new Date();
const todaysWeal = todaysweak.getDate();
if(todaysWeal === 1){
    console.log(true)
}else{
    console.log(false)
}

// 12

const birthday2 = new Date(2025, 6, 6); 
const birthdayWeekday = birthday2.getDay(); 

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(birthdayWeekday);        
console.log(days[birthdayWeekday]);  

// 13

const today3 = new Date();           
const todayWeekday = today3.getDay(); 

if (todayWeekday === 0) {
    console.log("Today is Sunday!");
} else {
    console.log("Today is not Sunday.");
}



// 14
const today8 = new Date();
const currentYear = today8.getFullYear();
console.log(currentYear);

// 15
const birthday5 = new Date(2010, 6, 6);
const birthdayYear = birthday5.getFullYear();
console.log(birthdayYear);

// 16
const isYear2025 = today8.getFullYear() === 2025;
console.log(isYear2025);

// 17
const currentHour = today8.getHours();
console.log(currentHour);

// 18
const someDate2 = new Date(2025, 6, 6, 14, 30);
const someDateHour2 = someDate2.getHours();
console.log(someDateHour2);

// 19
const isMorningNow = currentHour < 12;
console.log(isMorningNow);

// 20
const currentMinute = today8.getMinutes();
console.log(currentMinute);

// 21
const someDateMinute2 = someDate2.getMinutes();
console.log(someDateMinute2);

// 22
const isStartOfHour = currentMinute === 0;
console.log(isStartOfHour);


// 23
const date1 = new Date();
const seconds1 = date1.getSeconds();
console.log(seconds1);

// 24
const currentSeconds = new Date().getSeconds();
alert(currentSeconds);

// 25
function getSecondsOfDate(someDate) {
    return someDate.getSeconds();
}
const exampleDate = new Date(2025, 6, 6, 14, 30, 45);
console.log(getSecondsOfDate(exampleDate));

// 26
const dateA = new Date(2025, 6, 6, 14, 30, 20);
const dateB = new Date(2025, 6, 6, 14, 30, 50);
console.log(dateA.getSeconds() === dateB.getSeconds());

// 27
setInterval(() => {
    const now = new Date();
    console.log(now.getSeconds());
}, 1000);

// 28
const date2 = new Date();
const month1 = date2.getMonth(); 
console.log(month1);

// 29
const currentMonth = new Date().getMonth();
alert(currentMonth + 1); 

// 30
function getMonthOfDate(someDate) {
    return someDate.getMonth();
}
console.log(getMonthOfDate(new Date(2025, 10, 5)));

// 31
const monthDate1 = new Date(2025, 5, 10);
const monthDate2 = new Date(2025, 11, 20);
console.log(monthDate1.getMonth() === monthDate2.getMonth());

// 32
setInterval(() => {
    const now = new Date();
    console.log(now.getMonth() + 1);
}, 5000);

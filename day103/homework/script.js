function updateTime() {
    const date1 = new Date();
    let year = date1.getFullYear();
    let month = (date1.getMonth() + 1).toString().padStart(2, '0');
    let days = date1.getDate().toString().padStart(2, '0');
    let hours = date1.getHours().toString().padStart(2, '0');
    let minutes = date1.getMinutes().toString().padStart(2, '0');
    let seconds = date1.getSeconds().toString().padStart(2, '0');

    const result2 = document.getElementById("datetime");
    const result = `${year}-${month}-${days} ${hours}:${minutes}:${seconds}`;

    result2.textContent = result;
}

updateTime();
setInterval(updateTime, 1000);



/// 2 
const flipBTN = document.getElementById("flip")
const flipresult = document.getElementById("diceResult")

flipBTN.addEventListener("click", () => {
    const dice = Math.floor(Math.random() * 6) + 1 
    flipresult.textContent = dice
})


// 3

const fruits = ["ვაშლი", "მსხალი", "ბანანი", "ატამი"]

const fruisBTN = document.getElementById("fruit");
const furitresultt = document.getElementById("fruitsresult");

fruisBTN.addEventListener("click", () => {
    let randomindex = Math.floor(Math.random() * fruits.length)
    furitresultt.textContent = fruits[randomindex]
})


// 4

const letters = [
    ..."abcdefghijklmnopqrstuvwxyz",
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];
const numbers = ["1","2","3","4","5","6","7","8","9"];
const symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","?"];

const paswordBTn = document.getElementById("paswordBTn");
const passresult = document.getElementById("paswordresult");

paswordBTn.addEventListener("click", () => {
    // combine all into one array
    const allChars = [...letters, ...numbers, ...symbols];

    let password = "";
    for (let i = 0; i < 8; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passresult.textContent = password;
})

// 5

function showDateInfo() {
    // ✅ თვეები (0–11)
    const months = [
        "იანვარი", "თებერვალი", "მარტი", "აპრილი",
        "მაისი", "ივნისი", "ივლისი", "აგვისტო",
        "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
    ];

    // ✅ კვირის დღეები (0–6; 0 = კვირა)
    const weekdays = [
        "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი",
        "ხუთშაბათი", "პარასკევი", "შაბათი"
    ];

    const now = new Date();
    const currentMonth = months[now.getMonth()];   // 0–11
    const currentDay = weekdays[now.getDay()];     // 0–6

    document.getElementById("month").textContent = currentMonth;
    document.getElementById("weekday").textContent = currentDay;
}

showDateInfo();


// 6
function daysUntilBirthday() {
    const input = document.getElementById("birthday").value;
    const [month, day] = input.split("-").map(Number);

    if (!month || !day) {
        document.getElementById("result").textContent = "გთხოვ შეიყვანე თვე და დღე სწორად.";
        return;
    }

    const today = new Date();
    const currentYear = today.getFullYear();

    // შექმენი ამ წლის დაბადების დღე
    let nextBirthday = new Date(currentYear, month - 1, day);

    // თუ უკვე გავიდა, ავიღოთ მომდევნო წლის დაბადების დღე
    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    // გამოთვლა დღეში
    const diffTime = nextBirthday - today; // milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("result").textContent =
        `დარჩა ${diffDays} დღე დაბადებამდე! 🎉`;
}


// 7 

let lastClickTime = null;

const btn = document.getElementById("timeBtn");
const timeResult = document.getElementById("timeResult");

btn.addEventListener("click", () => {
    const now = Date.now();

    if (lastClickTime !== null) {
        const secondsPassed = ((now - lastClickTime) / 1000).toFixed(2);
        timeResult.textContent = `დაკლიკებიდან გავიდა: ${secondsPassed} წამი`;
    } else {
        timeResult.textContent = "ეს პირველი დაკლიკეა!";
    }

    lastClickTime = now;
});

const colorBtn = document.getElementById("colorBtn");
const colorBox = document.getElementById("colorBox");

colorBtn.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = randomColor;
});
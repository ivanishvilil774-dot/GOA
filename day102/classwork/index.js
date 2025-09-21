// const result = document.getElementById("result");
// const randombtn = document.getElementById("random");


// const strings = ["hello", "i", "am", "luka"]
// randombtn.addEventListener("click", () => {
//     const randomindex = Math.floor(Math.random()*strings.length)
//     const randomstr = strings[randomindex]

//     result.textContent = randomstr
// })

// // 2 

// const paragraph = document.getElementById("day-text");
// const button = document.getElementById("show-day");

// const days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];

// button.addEventListener("click", function() {
//     const today = new Date().getDay(); // აბრუნებს 0-6
//     paragraph.textContent = "დღეს არის " + days[today];
// });


// 3 

// 1 წუთის განმავლობაში ყოველ წამს ბეჭდავს დროს
let count = 0;
let myInterval = setInterval(() => {
    count++

    const cd = new Date();
    console.log(`${cd.getFullYear()}-${cd.getMonth()}-${cd.getDate()},${cd.getHours()}-${cd.getMinutes()}-${cd.getSeconds()}`)

    if (count === 60){
        clearInterval(myInterval)
    }
}, 100)
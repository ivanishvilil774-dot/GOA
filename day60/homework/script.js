// homework 1 start
let fruits = ["ვაშლი", "ბანანი", "ატამი", "ალუბალი", "მსხალი"];
fruits.push("კივი", "ანანასი");

console.log(fruits); 

// homework 1 end

// homework 2 start

let movies = ["Inception", "Titanic", "The Matrix", "Avatar"];
let removedElement = movies.pop(); 

console.log("წაშლილი ელემენტია:", removedElement);
console.log("განახლებული სია:", movies); 

// homework 2 end

// homework 3 start 

let arr = [10, 20, 30, 40, 50];

console.log(arr.slice(1, 4));


let fruitss = ["ვაშლი", "მსხალი", "ბანანი", "ატამი"];

fruits.splice(1, 1, "კივი");
console.log(fruitss);


let names = ["ანა", "ლუკა", "გიორგი"];

let first = names.shift(); 
console.log(first);
console.log(names); 


let cities = ["ბათუმი", "ქუთაისი"];

cities.unshift("თბილისი");
console.log(cities);



let colors = ["წითელი", "მწვანე", "ლურჯი"];

console.log(colors.indexOf("მწვანე")); // 1
console.log(colors.indexOf("შავი"));   // -1
console.log(colors.indexOf("წითელი")); // 0


// homework 3 end



// homework 4 start


// getElementById - აბრუნებს მხოლოდ ერთ ელემენტს უნიკალური ID-ით.
document.getElementById("myId");

// getElementsByClassName - აბრუნებს HTMLCollection-ს კლასის სახელით.
// შეიძლება ბევრი ელემენტი მოიძებნოს.
document.getElementsByClassName("myClass");

// getElementsByTagName - აბრუნებს ყველა იმ ტეგს (მაგ. p, div, span) რომლებიც ვებგვერდზეა.
document.getElementsByTagName("p");

// homework 4 end


// homework 5 start
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function() {
    para1.textContent = "ტექსტი შეიცვალა!";
});

btn2.addEventListener("click", function() {
    para2.innerHTML += `<p><b>Bold Text</b></p>`;
});


// homework 5 end 
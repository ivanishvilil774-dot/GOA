//1 

console.log("Start");

setTimeout(function () {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");

// ამ კოდში პირველი გამოვა Start მეორე End და ბოლოს Inside setTimeout
// რადგან ჩვენ გავუწერეთ 2000 მილიწამი ანუ 2 წამი~

//2 

// Callback არის ფუნქცია, რომელსაც სხვა ფუნქციიდან ვიძახებთ.



// 3
const randomNum = [1, 2, 3, 4, 5, 6];

const filtered = randomNum.filter(num => {
    return num % 2 === 0;
});


// 4


//filter() ქმნის ახალ მასივს, სადაც იქნება მხოლოდ ის ელემენტები, რომლებიც აკმაყოფილებენ რაღაც პირობას.
//map() ქმნის ახალ მასივს, მაგრამ არ ამოირჩევს ელემენტებს
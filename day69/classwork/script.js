const account = {
    email: "exsampole12@gmail.com",
    _pass: "exsampole123",
    fullName: "luka Ivanisshvili",

    get getEmail() {
        return this.email;
    },

    set pass(pass) {
        if (pass.length >= 6) {
        this._pass = pass;
        } else {
        console.log("პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს");
        }
    },


    greet() {
        return "მე ვარ " + this.fullName;
    }
};

// 2
// ფუნქციური კონსტრუქტორი
function Car(brand, model, year) {
    this.brand = brand;    
    this.model = model;    
    this.year = year;      


    this.introduce = function () {
        console.log(`მანქანა: ${this.brand} ${this.model}, გამოშვების წელი: ${this.year}`);
    };
}

// ობიექტების შექმნა new კივორდით
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("BMW", "X5", 2023);


// მეთოდის გამოძახება თითოეული ობიექტისთვის
car1.introduce();
car2.introduce();


//ეს არის "ფუნქციური კონსტრუქტორი", რომელსაც იყენებდნენ ES6-ამდე (კლასების გამოჩენამდე).


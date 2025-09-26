class Student {
    constructor(name, surname, email, password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}

const form = document.getElementById("form-main");
const infosection = document.getElementById("info-section");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newStudent = new Student(name, surname, email, password);

    infosection.innerHTML = `name: ${name} <br>
                            surname: ${surname} <br>
                            email: ${email}<br>
                            password: ${password}<br>
                            `
});












// 3 
class Teacher{
    constructor(name,subject){
        this.name = name
        this.subject = subject
    }

    introduce(){
        console.log(`hello, i am ${this.name} I teach ${this.subject}`)
    }
}

const teacher = new Teacher("Mrs. Thompson", "Mathematics")
teacher.introduce()

// 4 

class Phone{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    ring(){
        console.log(`the ${this.brand} ${this.model} is ringing`)
    }
}
const myPhone = new Phone("Apple", "iPhone 15");
myPhone.ring();

// 5 

class Movie{
    constructor(title, year){
        this.title = title
        this.year = year
    }
    play(){
        console.log(`Now playing: ${this.title} (${this.year})`)
    }
}

const movie = new Movie("Inception", "2010")
movie.play()

// 6 

class Cat{
    constructor(name, color){
        this.name = name
        this.color = color
    }

    meow(){
        console.log(`${this.name} the ${this.color} cat says Meow`)
    }
}

const cat = new Cat("Whiskers", "Gray")
cat.meow()


// 7 

class BankCard{
    constructor(cardNumcardNumber, balance){
        this.cardNumcardNumber = cardNumcardNumber
        this.balance = balance
    }

    withdraw(amount){
        console.log(this.balance + amount)
    }
}
const myCard = new BankCard("1234-5678-9012-3456", 500);
myCard.withdraw(150);  // New balance: $350
// 1) Account კლასი
class Account {
    // პირადი ველები (# სიმბოლო ნიშნავს რომ ეს ველი private-ია)
    #password;
    #email;

    constructor(password, email, fullname) {
        this.#password = password;
        this.#email = email;
        this.fullname = fullname;
    }

    // introduce მეთოდი
    introduce() {
        console.log(`Hello, my name is ${this.fullname}`);
    }

    // Setter პაროლის შესაცვლელად
    set password(newPassword) {
        // ვამოწმებთ პირობას:
        // მინიმუმ 6 სიმბოლო, შეიცავდეს რიცხვს და ასოს
        const hasLetter = /[a-zA-Z]/.test(newPassword);
        const hasNumber = /[0-9]/.test(newPassword);

        if (newPassword.length >= 6 && hasLetter && hasNumber) {
            this.#password = newPassword;
            console.log("Password changed successfully.");
        } else {
            console.log("Error: Password must be at least 6 characters long and contain both letters and numbers.");
        }
    }

    // Getter რომ მივიღოთ იმეილი
    get email() {
        return this.#email;
    }
}

/*
    განსხვავება class-სა და function constructor-ს შორის:

    - function constructor:
        * არის ძველი გზა ობიექტების შესაქმნელად
        * იყენებს prototype მექანიზმს
        * არ აქვს private ველების მხარდაჭერა პირდაპირ (ES2022-მდე)
    - class:
        * არის თანამედროვე სინტაქსი, უფრო გასაგები
        * private ველები (#) პირდაპირ მხარდაჭერილია
        * კოდი უფრო სტრუქტურირებულია და მარტივად წასაკითხი

    პლიუსები class-ის:
        + მკაფიო და გასაგები სტრუქტურა
        + მემკვიდრეობა მარტივია (extends)
        + private ველების მხარდაჭერა

    მინუსები class-ის:
        - ცოტა ნაკლები მოქნილობა ძველ ბრაუზერებში (საჭიროა transpiler)
        - ზოგიერთ სიტუაციაში function constructor შეიძლება უფრო მარტივი იყოს
*/


// 2) Vehicle, Car, Motorcycle

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    startEngine() {
        console.log(`The engine of ${this.brand} is starting.`);
    }

    getInfo() {
        return `This is a ${this.brand} made in ${this.year}.`;
    }
}

class Car extends Vehicle {
    constructor(brand, year, doors) {
        super(brand, year);
        this.doors = doors;
    }

    honk() {
        console.log("Beep beep!");
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, year, hasSidecar) {
        super(brand, year);
        this.hasSidecar = hasSidecar;
    }

    revEngine() {
        console.log("Vrrroooom!");
    }
}

// ტესტი
const myCar = new Car("Toyota", 2020, 4);
myCar.startEngine();
myCar.honk();
console.log(myCar.getInfo());

const myBike = new Motorcycle("Harley-Davidson", 2018, false);
myBike.startEngine();
myBike.revEngine();
console.log(myBike.getInfo());


// 3) ფორმასთან მუშაობა
const accounts = [];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("accountForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const fullname = document.getElementById("fullname").value;

        // ვქმნით Account ობიექტს
        const newAccount = new Account(password, email, fullname);

        // მაგალითისთვის ვცვლით პაროლს set მეთოდით
        newAccount.password = password; // აქვე მოხდება შემოწმება

        // ვამატებთ მასივში
        accounts.push(newAccount);

        console.log("Accounts array:", accounts);
        alert("Account created successfully!");
        form.reset();
    });
});

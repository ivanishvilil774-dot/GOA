// ==========================
// 1) Animal და Dog კლასი
// ==========================

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Dog extends Animal {
    constructor(name, age, energy) {
        // super() იძახებს მშობელი კლასის constructor-ს
        super(name, age);
        this.energy = energy;
    }

    set updateEnergy(newEnergy) {
        if (newEnergy > 50) {
            this.energy = newEnergy;
            console.log(`Energy updated to ${newEnergy}`);
        } else {
            console.log("Energy must be greater than 50.");
        }
    }
}

// ტესტი
const dog1 = new Dog("Buddy", 3, 60);
console.log(dog1.describe()); // "Buddy is 3 years old."
dog1.updateEnergy = 80;       // Energy updated
dog1.updateEnergy = 40;       // არ განახლდება


// ==========================
// 2) Person და Student კლასი
// ==========================

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, grade) {
        // super() — ამ შემთხვევაში მშობელი კლასის constructor-ს
        // გადაეცემა name პარამეტრი
        super(name);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying and ${this.name}'s grade is ${this.grade}`);
    }
}

// ტესტი
const student1 = new Student("Luka", "A");
student1.greet(); // Hello, my name is Luka
student1.study(); // Luka is studying and Luka's grade is A


// ==========================
// 3) ფორმის მონაცემების localStorage-ში შენახვა
// ==========================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // ვქმნით ობიექტს
        const userData = {
            name: name,
            lastname: lastname,
            email: email,
            password: password
        };

        // JSON.stringify გარდაქმნის ობიექტს ტექსტად,
        // რომ შევინახოთ localStorage-ში
        localStorage.setItem("user", JSON.stringify(userData));

        alert("მონაცემები წარმატებით შეინახა!");
        form.reset();
    });
});

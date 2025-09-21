// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     describe() {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, energy) {
//         super(name, age);
//         this.energy = energy;
//     }

//     set updateEnergy(newEnergy) {
//         if (newEnergy > 50) {
//             this.energy = newEnergy;
//         } else {
//             console.log("Energy value must be greater than 50!");
//         }
//     }
// }

// const dog1 = new Dog("lusi", 3, 80);
// console.log(dog1.describe());
// console.log("Initial energy:", dog1.energy);

// dog1.updateEnergy = 60;
// console.log("Updated energy:", dog1.energy);

// dog1.updateEnergy = 40;
// console.log("Energy after invalid update:", dog1.energy);

// // 2 


// class Person {
//     constructor(name){
//         this.name = name
//     }

//     greet(){
//         console.log(`hello my name is ${this.name}`)
//     }
// }


// class Student extends Person{
//     constructor(name, grade){
//         super(name)
//         this.greet = grade
//     }

//     study(){
//         console.log(`${name} is studying and ${name}'s grade is ${grade}`)
//     }
// }


// const student1 = new Student("Alice", "A");
// student1.greet();
// student1.study();



// 3

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // აღარ დარეფრეშდება გვერდი

        // 1. წამოვიღოთ მნიშვნელობები input-ებიდან
        const name = document.getElementById("#name").value;
        const lastname = document.getElementById("#lastname").value;
        const email = document.getElementById("#email").value;
        const password = document.getElementById("#password").value;

        // 2. შევქმნათ ობიექტი, რომელშიც ინახება მონაცემები
        const userData = {
            name: name,
            lastname: lastname,
            email: email,
            password: password
        };

        // 3. localStorage-ში შენახვა (JSON.stringify - ობიექტი → სტრიქონად)
        localStorage.setItem("user", JSON.stringify(userData));

        // 4. შეტყობინება მომხმარებელს
        alert("მონაცემები შენახულია localStorage-ში!");

        // 5. (არასავალდებულო) ფორმის გასუფთავება
        form.reset();
    });
});
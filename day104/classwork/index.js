class Bank {
    constructor(username) {
        this.username = username;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} added. New balance: ${this.balance}`);
    }
}

const account = new Bank("Luka");
account.deposit(100);
console.log("Balance:", account.balance);


// 2 
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is running`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();

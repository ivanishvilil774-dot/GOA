
const Person = {
    name: "Luka",
    surname: "Ivanishvili",
    _age: 16,
    country: "Georgia",

    get UserInfo(){
        return "your name is " + this.name + this.surname + "you are " + this._age;
    },

    set age(userAge){
        if(userAge < 18){
            return'The person is not an adult'
        }
        else{
            return this.age
        }
    }
}



//2 

const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    language: "English"
};


const { title, author } = book;

console.log(title);  
console.log(author);


// 3 


function Person(name, surname, age, country) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;

    if (this.name.length >= 4) {
        console.log(`User name is: ${this.name}`);
    } else {
        console.log("The person's name should contain at least 4 characters");
    }

    this.aboutThePerson = function() {
        console.log(`The person's name is ${this.name}, surname ${this.surname}, the person's age is ${this.age} and person lives in ${this.country}`);
    };
}

const p1 = new Person("Luka", "Ivanishvili", 22, "Georgia");
p1.aboutThePerson();



// 4




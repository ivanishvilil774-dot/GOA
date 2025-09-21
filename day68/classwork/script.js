const people = [
    {
        name: "ნინო",
        age: 25,
        talk: function () {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
        },
        friends: ["ლიკა", "გიორგი", "ანა"],
        address: {
        city: "თბილისი",
        street: "რუსთაველის გამზირი",
        }
    },
    {
        name: "ლაშა",
        age: 17,
        talk: function () {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
        },
        friends: ["ნინო"],
        address: {
        city: "ბათუმი",
        street: "ფარნავაზ მეფის ქუჩა",
        }
    },
    {
        name: "სოფო",
        age: 20,
        talk: function () {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
        },
        friends: ["თემო", "ეკა", "მაკა"],
        address: {
        city: "ქუთაისი",
        street: "გოგებაშვილის ქუჩა",
        }
    },
    {
        name: "გიორგი",
        age: 32,
        talk: function () {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
        },
        friends: ["ზურა", "ნინო", "სოფო"],
        address: {
        city: "რუსთავი",
        street: "წმინდა ნინოს ქუჩა",
        }
    },
    {
        name: "მარიამი",
        age: 15,
        talk: function () {
        console.log(`გამარჯობა, მე ვარ ${this.name}`);
        },
        friends: ["გიორგი", "ლაშა"],
        address: {
        city: "გორი",
        street: "ჭავჭავაძის ქუჩა",
        }
    }
];

// საკუთარი filter ლოგიკა
const filteredPeople = [];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age > 18 && person.friends.length >= 2) {
        filteredPeople.push(person);
    }
}

console.log("გაფილტრული ადამიანები:");
console.log(filteredPeople);


// 2

const fruits = ["ვაშლი", "მსხალი", "კივი"];

// for...in გაივლის მასივის ინდექსებს
for (let index in fruits) {
  console.log(index); // ბეჭდავს ინდექსს: 0, 1, 2
  console.log(fruits[index]); // ბეჭდავს ელემენტებს: ვაშლი, მსხალი, კივი
}


/*

- გადის key-ებზე (მაგ. ობიექტის ველების სახელებზე ან მასივის ინდექსებზე)

- გადის მნიშვნელობებზე (values), მაგალითად მასივის ელემენტებზე ან სტრინგის ასოებზე
*/


// 3

const persons = {
    firstName: "luka",
    lastName: "ivcanishvili",
    introduce() {
        console.log('Hello, my name is ' + this.firstName + ' and my last name is ' + this.lastName);
    }
};

persons.introduce(); 



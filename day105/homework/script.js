// 2 -3  
const car = {
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "black",
    electric: false
};

const key = Object.keys(car)
console.log(key.length)


// 4 
function toupper(obj){
    return Object.keys(obj).map(key => key.toUpperCase())
}

const student = {
    name: "Nika",
    age: 16,
    city: "Tbilisi"
};

console.log(toupper(student))

// 5 

const student2 = {
    name: "Gio",
    age: 29,
    city: "Tbilisi"
};


function extract(obj2){
    const extractobh = Object.keys(obj2)
    return extractobh.includes("city")
}

console.log(extract(student2))


// 6 

const student3 = {
    name: "Gio",
    age: 20,
    address: {
        city: "Tbilisi",
        street: "Rustaveli Ave",
        zipcode: 12345
    },
    grades: {
        math: "A",
        english: "B"
    }
};

const toplevel = Object.keys(student3)
console.log(toplevel)

// 7 

const laptop = {
    brand: "Dell",
    model: "XPS 13",
    year: 2023,
    color: "Silver",
    isTouchscreen: true
};


const values = Object.values(laptop)
console.log(values)
console.log(values.length)

// 8 

const student4 = {
    name: "Gio",
    age: 20,
    grade: 95,
    city: "Tbilisi",
    height: 175
};

function justnum(obg3){
    const number = Object.values(obg3).filter(value => typeof value === 'number')
    return number
}

console.log(justnum(student4))


// 9
const student5 = {
    name: "Gio",
    age: 23,
    grade: 99,
    city: "Tbilisi",
    height: 190
};

// Get numeric values
let numericValues = Object.values(student5).filter(value => typeof value === 'number');

// Sum them
let sum = 0;
numericValues.forEach(number => {
    sum += number;
});

console.log(sum);

// 10 
const car2= {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    mileage: 15000,
    electric: false
};

let valueex = Object.values(car2)
console.log(valueex.includes("Toyota"))


// 11 

const laptop2= {
    brand: "Dell",
    model: "XPS 13",
    year: 2023,
    color: "Silver",
    isTouchscreen: true
};

for(const [key, value] of Object.entries(laptop2)){
    console.log(`${key}, ${value}`)
}

// 12 

const phone = {
    brand: "Samsung",
    model: "Galaxy S23",
    storage: "128GB",
    color: "Phantom Black"
};

function printObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
}

printObject(phone);


// 13 

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi"
};

function entriesToStrings(obj) {
    return Object.entries(obj).map(([key, value]) => `${key}=${value}`);
}

console.log(entriesToStrings(movie));


// 14 

const inventory = {
    apples: 5,
    oranges: 12,
    bananas: 20,
    grapes: 8
};

function filterValuesGreaterThan10(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => typeof value === "number" && value > 10)
    );
}

console.log(filterValuesGreaterThan10(inventory));


// 15 

const languages = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German"
};

function swapKeysAndValues(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key])
    );
}

console.log(swapKeysAndValues(languages));


// 16 

const student7 = {
    name: "Gio",
    age: 20,
    city: "Tbilisi"
};

// Using hasOwnProperty
console.log(student7.hasOwnProperty("city"));  // true
console.log(student7.hasOwnProperty("gender"));// false


//17 

const fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

// Check if "weight" exists as own property
console.log(fruit.hasOwnProperty("weight")); // false


// 18 
const city = {
    name: "Paris",
    country: "France",
    population: 2140000
};

// "toString" comes from prototype, not own property
console.log(city.hasOwnProperty("toString")); // false

// 19 

const movie2 = {
    title: "Inception",
    director: "Christopher Nolan"
};

// Add a new property
movie2.year = 2010;

// Check if "year" is now an own property
console.log(Object.hasOwn(movie2, "year")); // true


// 20 

const laptop3 = {
    brand: "HP",
    model: "Pavilion",
    color: "Silver"
};

// Delete the "color" property
delete laptop3.color;

// Confirm it no longer exists
console.log(Object.hasOwn(laptop3, "color")); // false


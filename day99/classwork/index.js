const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 70 },
    { name: "Mouse", price: 40 }
];

const filteredProducts = products.filter(product => product.price < 100);
console.log(filteredProducts);

// 1

const words = ["apple", "orange", "banana", "grape", "berry"];
const firstB = words.find(word => word.startsWith("b"));
console.log(firstB);


// 2

      
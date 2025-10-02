// 2 
const myPromis = new Promise((res, rej) => {
    let randomside = ["Heads", "Tails"];
    let randomindex = Math.floor(Math.random() * randomside.length);

    if (randomside[randomindex] === "Heads") {
        res("Heads");
    } else {
        rej("Tails");
    }
});

myPromis
    .then(result => console.log("you got: " + result))
    .catch(rejection => console.log("you got: " + rejection));


// 3 

const myPromis2 = new Promise((res, rej) => {
    let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
    let fruitsindex = Math.floor(Math.random() * fruits.length);
    let randomstringslenght = fruits[fruitsindex]
    
    if(randomstringslenght.length %2 === 0){
        res("success")
    }else{
        rej("failure")
    }
});

myPromis2
    .then(result => console.log("success"))
    .catch(rejection => console.log("failure"))
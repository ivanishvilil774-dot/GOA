// 1
const planetdata = new Promise((res, rej) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            console.log("Planet data success");
            res("Planet data success");
        } else {
            console.log("Planet data failed");
            rej("Planet data failed");
        }
    }, 200);
});

const numberofmoons = new Promise((res, rej) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            console.log("Satellite data success");
            res("Satellite data success");
        } else {
            console.log("Satellite data failed");
            rej("Satellite data failed");
        }
    }, 1000);
});

const missionsset = new Promise((res, rej) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            console.log("Exploration data success");
            res("Exploration data success");
        } else {
            console.log("Exploration data failed");
            rej("Exploration data failed");
        }
    }, 1000);
});

Promise.all([planetdata, numberofmoons, missionsset])
    .then((message) => {
        console.log("All data received successfully:", message);
    })
    .catch((error) => {
        console.log("One dataset failed:", error);
    });


// 2

const resullt = new Promise((res, rej) => {
    setTimeout(() => {
        let num = Math.random();
        if (num > 0.5) {
            res("Hello World");
        } else {
            rej("Error occurred");
        }
        
    }, 2000);
})

resullt
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

// 3 


const value = 5;

const double = (value) => new Promise(res => res(value * 2));

const addTen = (value) => new Promise(res => res(value + 10));

const multiplyByThree = (value) => new Promise(res => res(value * 3));

double(value)
    .then(result => addTen(result))
    .then(result => multiplyByThree(result))
    .then(finalResult => console.log(finalResult)); 
// 1

const createPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Resolve: ${randomNumber}`);
        } else {
            reject(`Reject: ${randomNumber}`);
        }
        }, 2000);
    });
};

createPromise()
    .then(message => console.log(message))
    .catch(message => console.log(message));


// 2 

const createFunction1 = (num, delay) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
        if (num > 0.5) {
            res(`Resolve: ${num}`);
        } else {
            rej(`Reject: ${num}`);
        }
        }, delay);
    });
};

Promise.all([
    createFunction1(0.7, 2000),
    createFunction1(0.8, 2000),
    createFunction1(0.6, 2000)
]).then(messages => console.log('All resolved:', messages))
.catch(message => console.log('One rejected:', message));

// 3 

function workingOnPromise(str) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (str.length > 5) {
            resolve(`Resolve: "${str}" has more than 5 characters.`);
        } else {
            reject(`Reject: "${str}" is too short.`);
        }
        }, 2000); 
    });

    // Promise-ის დამუშავება
    promise
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

workingOnPromise("hello");
workingOnPromise("JavaScript");
workingOnPromise("cat");

const lengsstr = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str.length % 2 === 0) {
                resolve(str);  
            } else {
                reject(str);   
            }
        }, 2000); 
    });
}

const promisesArray = [
    lengsstr("hello"),  
    lengsstr("basdfkhbdfki"), 
    lengsstr("luka")          
];

Promise.allSettled(promisesArray)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index} resolved with: ${result.value}`);
            } else {
                console.log(`Promise ${index} rejected with: ${result.reason}`);
            }
        });
    });


// 2 
fetch('https://goa-api.onrender.com/mentors')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));


///3 

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

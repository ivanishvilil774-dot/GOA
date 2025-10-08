fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// 2 

fetch('https://goa-api.onrender.com/leaders')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
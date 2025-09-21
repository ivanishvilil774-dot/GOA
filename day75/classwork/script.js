// 1  //2 

const returnPromise = () => {
    return new Promise((resolve,rejection) => {
        setTimeout(() => resolve("hello"), 5000);
    });
};

const porm = returnPromise()


porm.then((value) =>{
    console.log("resolve", value)

}).catch((reason) => {
    console.log('rejection', reason)
})

console.log("luka")

//3 


fetch("https://fakestoreapi.com/products")
    .then(res => {
        // then: თუ მოთხოვნა წარმატებით შესრულდა (სერვერმა გვიპასუხა)
        res.json()
    })
    .then(data => {
        // მეორე then: აქ უკვე გვაქვს გარდაქმნილი JSON მონაცემები
        console.log(data)
    })

    .catch(reason => {
        console.log(reason)
    })

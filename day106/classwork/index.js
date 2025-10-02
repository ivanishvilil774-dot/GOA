const promis = new Promise((res, rej) => {
    setTimeout(() => {
        res("Task complete")
    }, 3000) 
})

console.log(promis)
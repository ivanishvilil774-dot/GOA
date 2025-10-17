const getpost = async () => {
    const res = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
    const data = await res.json()
    console.log(data)
}

getpost()

// 2 

function getResult() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const randomNumber = Math.random()
        if (randomNumber < 0.5) {
            resolve("success")
        } else {
            reject("fail")
        }
        }, 2000)
    })
}

async function checkResult() {
    try {
        const result = await getResult()
        console.log("Resolved value:", result)
    } catch (error) {
        console.log("Rejected value:", error)
    }
}

checkResult()



// 3

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

fetchData()
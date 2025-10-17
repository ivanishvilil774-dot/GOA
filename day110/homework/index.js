async function getPost() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        data.forEach(user => {
            console.log(user.name); 
        });
    } catch (error) {
        console.log(error);
    }
}

getPost();


// 2 

async function getname() {
    try{
        const res = await fetch("https://dummyjson.com/users")
        const data = await res.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}


getname()




// 3 
async function fetchWithRetry(){
    const url = "https://dummyjson.com/users"

    for(let atempt = 1; atempt <= 3; atempt++){
        try{
            console.log(`Attempt ${atempt}`)
            const res = await fetch(url)
            if(!res.ok){
                throw new Error("error")
            }

            const data = await res.json()
            console.log("success", data)
            break;
        }catch(error){
            console.log(`Attempt ${atempt} failed`)

            if(atempt === 3){
                console.log(" Failed after 3 attempts.")
            }
        }
    }
}

fetchWithRetry()

// 4 

async function twocall() {
    try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        const firstUserId = data.users[0].id;
        const userRes = await fetch(`https://dummyjson.com/users/${firstUserId}`);
        const userDetails = await userRes.json();
        console.log(userDetails);
        
    } catch (error) {
        console.log("Error:", error);
    }
}

twocall();

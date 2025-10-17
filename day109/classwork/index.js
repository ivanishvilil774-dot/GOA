const cheknum = (num) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
        if (num > 10) {
            res("resolve");
        } else {
            rej("reject");
        }
        }, 2000);
    });
};


async function handleCheck() {
    try{
        const result = await cheknum(1)
        console.log(result);
    }catch (error){
        console.log(error)
    }
}

handleCheck()
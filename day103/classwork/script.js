const flipbtn = document.getElementById("flipbtn");
const result = document.getElementById("resuolt"); 

const arioiorReshka = ["არიოლი", "რეშკა"];

flipbtn.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * arioiorReshka.length)
    let flipResult = arioiorReshka[randomIndex]
    result.innerHTML = flipResult

    if(flipResult === "რეშკა"){
        document.body.style.backgroundColor = "green"
    }else{
        document.body.style.backgroundColor = "red"
    }
})



function updateDateTime(){
    const datetime = document.getElementById("datetime")

    const data = new Date();

    const year = data.getFullYear()
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const days = String(data.getDate()).padStart(2, '0');


    datetime.innerHTML = `${year}-${month}-${days}`



     document.getElementById("randomNumber").innerHTML = Math.floor(Math.random() * 101);
}
updateDateTime()
setInterval(updateDateTime, 1000);
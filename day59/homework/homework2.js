//  <h1 id="myH1"></h1>
//     <button id="mybutton1">addition</button>
//     <button id="mybutton1">reset</button>
//     <button id="mybutton1">subtraction</button>

const myh1 = document.getElementById("myH1");
const button1 = document.getElementById("mybutton1");
const button2 = document.getElementById("mybutton2");
const button3 = document.getElementById("mybutton3")

result = 0;

button1.onclick = function() {
    result += 1;
    myh1.textContent = result;
}

button2.onclick = function() {
    result =  0;
    myh1.textContent = result;
}

button3.onclick = function() {
    result -= 1;
    myh1.textContent = result;
}

let paragraph = document.getElementById("myParagraph");
let bgButton = document.getElementById("bgButton");
let textButton = document.getElementById("textButton");
let sizeButton = document.getElementById("sizeButton");


bgButton.onclick = function() {
    paragraph.style.backgroundColor = "yellow";
}

textButton.onclick = function() {
    paragraph.style.color = "red";
}


sizeButton.onclick = function() {
    paragraph.style.fontSize = "30px";
}
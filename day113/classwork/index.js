const name = prompt("Write name!");
localStorage.setItem("name", name);

const nameElement = document.querySelector("h1");
nameElement.textContent = localStorage.getItem("name");

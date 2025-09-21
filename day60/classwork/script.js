
    // გადმოაქვს ე;ემენტი კონკრეტული ID ით
    const idElement = document.getElementById("myId");

    idElement.innerHTML = `<h2>ddddd</h2>, <p>hello</p>, <button>Click Me</button>`;

    // გადმოაქვს ელემენტები კლასის მიხედვით
    const classElements = document.getElementsByClassName("myClass");
    console.log("Elements with class 'myClass':", classElements);

    // გადმოაქვს ელემენტები TagName ის მიხედვით
    const paragraphElements = document.getElementsByTagName("p");
    console.log("All <p> elements:", paragraphElements);
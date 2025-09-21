const mybutton = document.getElementById("mybutton");
const result = document.getElementById("result");

mybutton.addEventListener("click", function () {
    const prompt1 = prompt("Enter first number");
    const prompt2 = prompt("Enter second number");

    const num1 = Number(prompt1);
    const num2 = Number(prompt2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;

        let type1 = (num1 % 2 === 0) ? "even" : "odd";
        let type2 = (num2 % 2 === 0) ? "even" : "odd";

        result.innerHTML = `
            <p>Sum = ${sum}</p>
            <p>${num1} - ${type1}</p>
            <p>${num2} - ${type2}</p>
        `;
    } else {
        result.innerHTML = "<p>გთხოვთ ორივე სწორი რიცხვი შეიყვანოთ.</p>";
    }
});

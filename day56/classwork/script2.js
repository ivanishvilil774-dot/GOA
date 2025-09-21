let age = prompt("შეიყვანეთ თქვენი ასაკი:");

age = Number(age);

if (age > 0 && age <= 13) {
    alert("თქვენ ხართ არასრულწლოვანი.");
} else if (age > 13 && age < 18) {
    alert("თქვენ ხართ თინეიჯერი.");
} else if (age >= 18) {
    alert("თქვენ ხართ ზრდასრული.");
} else {
    alert("გთხოვთ, შეიყვანოთ სწორი ასაკი.");
}

const button = document.getElementById('myButton');
const heading = document.getElementById('myH1');


button.onclick  = function(){
    heading.textContent = 'hello world';
}

// DOM — ეს არის ვებ-გვერდის სტრუქტურა, რომელიც JavaScript-ს საშუალებას აძლევს, იმუშაოს HTML-ის ელემენტებთან.
// getElementById არის JavaScript მეთოდი, რომელიც გვაძლევს წვდომას კონკრეტულ HTML ელემენტზე, თუ მას მინიჭებული აქვს ID.
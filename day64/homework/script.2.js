// Scope Pollution ნიშნავს, როდესაც გლობალურ სკოპში ბევრი ცვლადი ცხადდება 
// ან ფუნქცია ცვლის გლობალურ ცვლადს არასაჭიროდ.

let count = 0;

function add() {
    count += 1; 
}

function reset() {
    count = 0;
}
const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');

// When user clicks a button
lightBtn.addEventListener('click', () => {
    document.body.className = 'light';
    localStorage.setItem('theme', 'light'); // Save theme choice
});

darkBtn.addEventListener('click', () => {
    document.body.className = 'dark';
    localStorage.setItem('theme', 'dark'); // Save theme choice
});

// When the page loads, check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme; // Apply saved theme
}



// hw 2 

// Get the saved count from localStorage
let visits = localStorage.getItem('visitCount');

// If no count exists, start at 0
if (!visits) {
    visits = 0;
} else {
    visits = Number(visits); // convert string to number
}

// Increase by 1
visits++;

// Save updated count back to localStorage
localStorage.setItem('visitCount', visits);

// Show it on the page
document.getElementById('visit-count').textContent = visits;


// hw 3

// Get inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Function to save a value
function saveValue(id, value) {
  localStorage.setItem(id, value); // key = id, value = what user typed
}

// Listen to typing
nameInput.addEventListener('input', () => saveValue('name', nameInput.value));
emailInput.addEventListener('input', () => saveValue('email', emailInput.value));
messageInput.addEventListener('input', () => saveValue('message', messageInput.value));

// Restore saved values
if (localStorage.getItem('name')) nameInput.value = localStorage.getItem('name');
if (localStorage.getItem('email')) emailInput.value = localStorage.getItem('email');
if (localStorage.getItem('message')) messageInput.value = localStorage.getItem('message');

// 1 

const userRole = 'admin';
<p>{userRole === 'admin' ? 'Admin Pane' : 'User Dashboard'}</p>


// 2 

const isAvaiable = true;
const products = [
    { name: 'Laptop', price: 999 },
];

<p>{isAvaiable ? products[0].price : 'Out of Stock'}</p>

// 3 

const isDaytime = true;
const sunUrl = "/images/sun.png";
const moonUrl = "/images/moon.png";

<img src={isDaytime ? sunUrl : moonUrl} alt={isDaytime ? 'Sun' : 'Moon'} />

// 4

const hasNotification = true;
<p>{hasNotification && 'New Notification'}</p>

// 5 
const usersEmail = 'user@example.com';
<p>{usersEmail && usersEmail}</p>

// 6 

const discount = 15;
<p>{discount > 0 ? "discount" : "No discount"}</p>
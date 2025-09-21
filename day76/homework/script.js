fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    const productHTML = createProductLI(data);
    render(productHTML);
});

function createProductLI(products) {
    let htmlString = "";

    for (const product of products) {
        htmlString += `
        <li>
            <img src="${product.image}" alt="${product.title}" width="100">
            <h2>${product.title}</h2>
            <p class="price">Price: $${product.price}</p>
            <p>${product.description}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            <button class="add-btn">Add to Cart</button>
        </li>
        `;
}

return htmlString;
}

// ფუნქცია, რომელიც გამოიტანს ეკრანზე
function render(htmlString) {
    const list = document.getElementById("products");
    list.innerHTML = htmlString; 

    // აქედან უნდა აიღო ღილაკები (აქ უკვე არსებობს DOM-ში)
    const buttons = list.querySelectorAll(".add-btn");

    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const li = e.target.closest("li");
            const title = li.querySelector("h2").textContent;
            const price = li.querySelector(".price").textContent;

        addToCart(title, price);
        });
    }
}

function addToCart(title, price) {
    const cart = document.getElementById("cart");
    const cartItem = document.createElement("li");

    cartItem.innerHTML = `
        ${title} - ${price}
        <button class="delete-btn">Delete</button>
    `;

    cart.appendChild(cartItem);

    // წაშლის ღილაკი
    const deleteBtn = cartItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        cartItem.remove();
    });
}
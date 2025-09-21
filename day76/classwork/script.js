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
        </li>
        `;
}

return htmlString;
}

// ფუნქცია, რომელიც გამოიტანს ეკრანზე
function render(htmlString) {
    const list = document.getElementById("products");
    list.innerHTML = htmlString; 
}

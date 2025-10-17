async function getProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        render(data); // pass data to render
    } catch (error) {
        console.log(error);
    }
}

function render(products) {
    const productList = document.getElementById("productsconteiner");

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}" style="width:100px; height:100px;">
            <h3>${product.title}</h3>
            <p>${product.price}$</p>
        `;
        productList.appendChild(productItem); // append each div
    });
}

// Call the async function
getProducts();

async function getProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        render(data);
    } catch {
        console.error("Error");
    }
}

function render(products) {
    const listOFPOsts = document.getElementById("itemList");
    const cart = document.getElementById("cart");

    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="">
            <p>${product.price} $</p>
            <button class="addButton">Add Item</button>
        `;
        listOFPOsts.appendChild(li);

        // select the button inside THIS li
        const addBTn = li.querySelector(".addButton");
        addBTn.addEventListener("click", () => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `
                <p>${product.title}</p>
                <img src="${product.image}" alt="">
                <p>${product.price} $</p>
                <button class="deleteBtn">Delete</button>
            `;
            cart.appendChild(cartItem);

            // select delete button inside this cartItem
            const deleteBtn = cartItem.querySelector(".deleteBtn");
            deleteBtn.addEventListener("click", () => {
                cartItem.remove(); // removes this specific item
            });
        });
    });
}

getProducts();



// fetch() აგზავნის მოთხოვნას (request) მითითებულ მისამართზე
// await აჩერებს კოდის შესრულებას, სანამ სერვერიდან პასუხი მოვა
// response.json() გარდაქმნის მიღებულ პასუხს JSON ობიექტად
// await იმიტომ გვჭირდება, რომ ესეც ასინქრონული ოპერაციაა
 // catch დაიჭერს ამ შეცდომას და თავიდან არ ჩამოაგდებს მთელ პროგრამას
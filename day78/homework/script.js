async function getPosts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        render(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

function render(posts) {
    const postsList = document.getElementById("posts");
    const addedList = document.getElementById("postsadded");

    posts.forEach(post => {
        // Create a post item
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <button class="addbutton">Add</button>
        `;
        postsList.appendChild(li);

        // Add button
        const addButton = li.querySelector(".addbutton");
        addButton.addEventListener("click", () => {
            // Create a new added item
            const addedItem = document.createElement("li");
            addedItem.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <button class="removebutton">Remove</button>
            `;
            addedList.appendChild(addedItem);

            // Remove button inside this added item
            const removeButton = addedItem.querySelector(".removebutton");
            removeButton.addEventListener("click", () => {
                addedItem.remove();
            });
        });
    });
}

getPosts();

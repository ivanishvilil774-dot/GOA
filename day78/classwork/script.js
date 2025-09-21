
function render(posts) {
    const postsList = document.getElementById("posts");

    posts.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsList.appendChild(li);
    });
}

async function getPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
        const data = await res.json();
        render(data); 
    } catch (error) {
        console.log("შეცდომა:", error.message);
    }
}

getPosts();


//async ნიშნავს, რომ ფუნქცია ასინქრონულია 
// ანუ მასში შეიძლება იყოს კოდი, რომელიც სრულდება ნელa

//await გამოიყენება იმისთვის, რომ დაველოდოთ შედეგს
//  Promise-იდან ისე როგორც ჩვეუებრივი კოდი

// try/catch გამოიყენება შეცდომების დასაჭერად
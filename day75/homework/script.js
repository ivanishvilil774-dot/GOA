fetch("https://fakestoreapi.com/products")
.then(res => res.json())// ეს დაბეჭდავს დიდ Response ობიექტს
.then(data => {
    const list = document.getElementById("products");

    data.forEach(product => {
    // თითოეული პროდუქტისთვის ვქმნით <li>
    const item = document.createElement("li");

    item.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p class="price">Price: $${product.price}</p>
        <p>${product.description}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating.rate} ⭐ (${product.rating.count} reviews)</p>
    `;

    list.appendChild(item);
    });
})



// ვქმნით ახალ Promise-ს
const myPromise = new Promise((resolve, reject) => {
const success = true; // სცადე შეცვალო false-ზე და ნახე რა მოხდება

if (success) {
// თუ ყველაფერი კარგადაა resolve
resolve("ოპერაცია წარმატებით შესრულდა!");
} else {
// თუ რამე პრობლემა მოხდა reject
reject("ოპერაცია ჩავარდა!");
}
});

myPromise
.then(message => {
    // მუშაობს მხოლოდ წარმატების შემთხვევაში
    console.log(message);
})
.catch(error => {
    // მუშაობს თუ reject გამოვიძახეთ
    console.error(error);
})


// ფუნქცია, რომელიც აბრუნებს Promise-ს
function delayedHello() {
return new Promise((resolve, reject) => {
    // setTimeout გამოიყენება რომ 2 წამში მოხდეს პასუხი
    setTimeout(() => {
    const success = true;

    if (success) {
        resolve("Hello World!");
    } else {
        reject("ვერ მივიღეთ პასუხი.");
    }
    }, 2000);
});
}

// Promise-ის გამოყენება
delayedHello()
.then(msg => {
    // წარმატების შემთხვევაში
    console.log(msg);
})
.catch(err => {
    // შეცდომის შემთხვევაში
    console.error(err);
})
.finally(() => {
    // ბოლოს ყოველთვის გაეშვება
    console.log("ც Timeout დასრულდა");
});

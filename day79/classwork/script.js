async function getInfo() {
    try {
        // Fetch-ი ითხოვს მონაცემებს API-დან
        const res = await fetch("https://fakestoreapi.com/products");
        // json() მეთოდით ვამოწმებთ და ვიღებთ პასუხს 
        const data = await res.json(); 
        console.log(data);
    } catch (error) {
        // თუ მოხდა შეცდომა fetch-ის დროს, ვილოგავთ შეცდომის მესიჯს
        console.log("Error:", error.message);
    }
}

getInfo();



//async გარდაქმნის ფუნქციას ასინქრონულ ფუნქციად 
//try — გამოიყენება ბლოკის შესამოწმებლად,
// catch — გამოიყენება try ბლოკში შეცდომის დაფიქსირებისთვის.
// await — გამოიყენება async ფუნქციის შიგნით, რათა დაველოდოთ ასინქრონული ოპერაციის დასრულებას,
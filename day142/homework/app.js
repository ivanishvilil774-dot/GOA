// // frontend სა და backend-ის კომუნიკაციისთვის მომხმარებელი 
// // აგზავნის მოთხოვნას(request) და იღებს პასუხს(response) backend-დან.


// // 5 მეთოდი მოთხოვნის გაგზავნისთვის:

// // get - მონაცემების მიღება
// // post - მონაცემების შექმნა
// // put - მონაცემების სრული განახლება
// // patch - მონაცემების ნაწილობრივი განახლება
// // delete - მონაცემების წაშლა


// // პორტტი არის სერვერის ნაწილი, რომელიც უსმენს მოთხოვნებს
//                 TRANSPORT LAYER
//                       |
//         --------------------------------
//         |                              |
//        TCP                            UDP


const http = require('http');

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({
        message: "Hello from server",
        date: new Date(),
        name: "My Server",
        
    }))
})

server.listen(5000, () => {
    console.log("Server is running on port 5000");
})
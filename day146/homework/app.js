const expres = require('express');
const port = 3000;
const app = expres();
const readfile = require('./readfile')

app.get("/books", async (req, res) => {
    const data = await readfile('./data.json')
    res.status(200).json(data)
})

app.get("/books/:id", async (req, res) => {
    const data = await readfile('./data.json')
    const book = data.find(b => b.id === parseInt(req.params.id))  
    if (book) {
        res.status(200).json(book)
    } else {
        res.status(404).json({ message: "Book not found" })
    }  
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


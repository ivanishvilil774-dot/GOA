const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

const Books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        year: 1925,
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        year: 1960,
    }
]


app.get("/books", (req,res) => {
    return res.status(200).json(Books);
})

app.get("book/:name", (req, res) => {
    const name = req.params.name

    const book = Books.find(b => b.title.toLowerCase() === name.toLowerCase());
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
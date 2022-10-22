const express = require('express')
const app = express()
const fs = require ('fs');
const  bodyPerser = require('body-parser')
app.use(bodyPerser.json())
app.use(bodyPerser.json({extended : true}))

const books = require("./db")
const savebook = (data)=> {
    let results = JSON.strigngify(data);
    fs.writeFileSync("db.json",results)
}

app.get('/books',(req , res) => {
    res.send('book')
})
app.get('/books/:id',(req , res) => {
    res.send(book.find(x => x.id == req.params.id))
})
app.post('/books',(req , res) => {
   books.push(req.body)
   saveBook(books)
   res.status(201).json(req.body)
})
app.put('/books/:id',(req , res) => {
    const updateIndex = books.findIndex(x => x.id == req.param.id)
    Object.assign(books[updateIndex],req.body)
    savebook(books)
    res.status(200).json(req.body)
})
app.delete('/books/:id',(req , res) => {
    const deletedIndex = books.findIndex(book => book.id == req.params.id)
    books.splice(deletedIndex,1)
    saveBook(books)
    res.status(200).send()
})
app.listen(3000 ,() => {
    console.log('Start server at port 3000.')
})


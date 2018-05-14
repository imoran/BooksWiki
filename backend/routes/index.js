const express = require('express');
const app = express.Router();
const books = require('./books')

app.get('/books', books.getAll);
app.post('/books', books.create);
app.get('/books/:id', books.get);
app.delete('/books/:id', books.delete);
app.patch('/books/:id', books.update);

module.exports = app;

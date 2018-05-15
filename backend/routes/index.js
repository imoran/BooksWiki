const express = require('express');
const app = express.Router();
const books = require('./books');
const users = require('./users');
const comments = require('./comments');

app.get('/books', books.getAll);
app.post('/books', books.create);
app.get('/books/:id', books.get);
app.delete('/books/:id', books.delete);
app.patch('/books/:id', books.update);

app.get('/users/:id', users.get);
app.post('/users', users.create);
app.patch('/users/:id', users.update);

app.post('/comments', comments.create);
// app.get('/comments/:id', comments.get);



module.exports = app;

const express = require('express');
const app = express.Router();
const books = require('./books');
const users = require('./users');
const comments = require('./comments');

app.get('/books', books.getAll);
app.get('/books/:id', books.get);
app.post('/books', books.create);
app.patch('/books/:id', books.update);
app.delete('/books/:id', books.delete);

app.get('/users/:id', users.get);
app.post('/users/signin', users.signin);
app.post('/users/signup', users.signup);
app.patch('/users/:id', users.update);

app.post('/comments', comments.create);



module.exports = app;

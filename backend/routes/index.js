const express = require('express');
const app = express.Router();
const books = require('./books');
const users = require('./users');
const comments = require('./comments');
const ratings = require('./ratings');
const checkAuth = require('./middleware/check-auth');

app.get('/books', books.getAll);
app.get('/books/:id', books.get);
app.post('/books', checkAuth, books.create);
app.patch('/books/:id', checkAuth, books.update);
app.delete('/books/:id', checkAuth, books.delete);

app.get('/users/:id', users.get);
app.post('/users/signin', users.signin);
app.post('/users/signup', users.signup);
app.patch('/users/:id', checkAuth, users.update);

app.post('/comments', checkAuth, comments.create);

app.post('/ratings', checkAuth, ratings.create);



module.exports = app;

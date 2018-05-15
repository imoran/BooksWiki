const { queries, actions } = require('../database');

const books = {
  getAll(req, res) {
    queries.getAllBooks()
    .then(books => {
      res.json(books)
    })
    .catch(err => {
      console.log(err);
    })
  },

  create(req, res) {
    actions.createBook(req.body)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  get(req, res) {
    queries.getBook(req.params.id)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  update(req, res) {
    actions.updateBook(req.body, req.params.id)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  delete(req, res) {
    queries.deleteBook(req.params.id)
    .then(_ => {
      res.status = 200;
      res.redirect('/books');
    })
    .catch(err => {
      console.log(err);
    })
  }
};

module.exports = books;
const { queries, actions } = require('../database');

const books = {
  getAll(req, res) {
    queries.getAllBooks()
    .then(books => {
      res.json(books)
    })
    .catch(err => {
      console.log(err);
    })
  },

  create(req, res) {
    actions.createBook(req.body)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  get(req, res) {
    queries.getBook(req.params.id)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  update(req, res) {
    actions.updateBook(req.body, req.params.id)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  delete(req, res) {
    queries.deleteBook(req.params.id)
    .then(_ => {
      res.status = 200;
      res.redirect('/books');
    })
    .catch(err => {
      console.log(err);
    })
  }
};

module.exports = books;

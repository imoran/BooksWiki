const db = require('../database/index')

const books = {
  getAll(req, res) {
    db.getAllBooks()
    .then(books => {
      res.json(books)
    })
    .catch(err => {
      console.log(err);
    })
  },

  create(req, res) {
    db.createBook(req.body)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  get(req, res) {
    db.getBook(req.params.id)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  update(req, res) {
    db.updateBook(req.body, req.params.id)
    .then(book => {
      res.status = 200;
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
  },

  delete(req, res) {
    db.deleteBook(req.params.id)
    .then(_ => {
      res.status = 200;
      res.redirect('/books');
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = books;

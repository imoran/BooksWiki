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
    Promise.all([
      actions.createBook(req.body),
      actions.createGenre(req.body),
      actions.createAuthor(req.body)
    ])
    .then(([book_id, genre_ids, author_ids]) => {
      console.log("genre_ids => ", genre_ids);
      genre_ids.map(genre_id => {
        actions.bookGenreAssociation(book_id.id, genre_id.id);
      })
      author_ids.map(author_id => {
        actions.bookAuthorAssociation(book_id.id, author_id.id);
      })
      actions.bookUserAssociation(book_id.id, req.userData.user_id)
      return book_id.id;
    })
    .then(book_id => {
      res.status(200).json({ message: "book was successfully created!"})
    })
    .catch(err => {
      console.log(err);
    })
  },

// {
//   "title": "wahted",
//   "year": 1988,
//   "description": "al;sdfaldh",
//   "img_url": "www.lksjhf.com",
//   "genre": [
//     {
//       "genre_id" : 1
//     },
//     {
//       "genre" : "mystery"
//     }
//   ],
//   "author": [
//     {
//       "author_id" : 1
//     },
//     {
//       "author" : "Tony Robbins"
//     }
//   ]
// }





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
    actions.deleteBook(req.params.id)
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

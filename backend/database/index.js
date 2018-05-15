const connection = require('./config');
const pg = require('pg-promise')()(connection);


module.exports = {
  getAllBooks() {
    const sql = `
    SELECT b.id, b.title, b.description,
  		   a.id AS author_id, a.name AS author, b.year, g.name AS genre,
  		   g.id AS genre_id, b.img_url, r.rating
      FROM books AS b
      JOIN book_genre AS bg
        ON bg.book_id = b.id
      JOIN genres AS g
        ON bg.genre_id = g.id
      JOIN book_author AS ba
      ON b.id = ba.book_id
      JOIN authors AS a
        ON a.id = ba.author_id
      JOIN ratings AS r
        ON b.id = r.book_id;
    `
    return pg.any(sql);
  },

  createBook({ title, year, description, img_url }) {
    const sql = `
      INSERT INTO
        books (title, year, description, img_url)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        id
    `
    return pg.one(sql, [title, year, description, img_url]);
  },

  getBook(id) {
    const sql =  `
      SELECT
        b.id, b.title, b.description, b.year, b.img_url,
        c.comment,
        (
          SELECT round(AVG(rating), 1)
          FROM ratings
          WHERE b.id = book_id
        ) AS rating,
        (
          SELECT array_agg(author)
          FROM authors
          JOIN book_author AS ba
            ON ba.book_id = b.id
          WHERE
            id = ba.author_id
        ) AS author,
        (
          SELECT array_agg(genre)
          FROM genres
          JOIN book_genre AS bg
            ON bg.book_id = b.id
          WHERE
            id = bg.genre_id
        ) AS genre
      FROM books AS b
      JOIN comments AS c
        ON b.id = c.book_id
      WHERE
        b.id = 1;
    `
    return pg.one(sql, [id]);
  },

  updateBook({ title, year, description, img_url }, id) {
    const sql = `
      UPDATE
        books
      SET
        title = $1,
        year = $2,
        description = $3,
        img_url = $4
      WHERE
        id = $5
      RETURNING
        id
    `
    return pg.one(sql, [title, year, description, img_url, id]);
  },

  deleteBook(id) {
    const sql =  `
      DELETE FROM
        books
      WHERE
        id = $1
    `
    return pg.none(sql, [id]);
  },

  getUser(id) {
    const sql = `
      SELECT
        *
      FROM
        users
      WHERE
        id = $1
    `
    return pg.one(sql, [id]);
  },

  updateUser({ name, email, password, picture }, id) {
    const sql = `
      UPDATE
        users
      SET
        name = $1,
        email = $2,
        password = $3,
        picture = $4
      WHERE
        id = $5
      RETURNING
        id
    `
    return pg.one(sql, [name, email, password, picture, id]);
  },

  createUser({ name, email, password, picture }) {
    const sql = `
      INSERT INTO
        users (name, email, password, picture)
      VALUES
        ($1, $2, $3, $4)
      RETURNING
        id
    `
    return pg.one(sql, [name, email, password, picture]);
  },

  // createComment({ user_id, book_id, comment }) {
  //   const sql = `
  //     INSERT INTO
  //       comments (user_id, book_id, comment)
  //     VALUES
  //       ()
  //
  //   `
  // }
};

const connection = require('./config');
const pg = require('pg-promise')()(connection);


module.exports = {
  getAllBooks() {
    const sql = `
	    SELECT b.id, b.title, b.description, a.name AS author, b.year, g.name AS genre
      FROM books AS b
      JOIN book_genre AS bg
        ON bg.book_id = b.id
      JOIN genres AS g
        ON bg.genre_id = g.id
      JOIN book_author AS ba
     	ON b.id = ba.book_id
      JOIN authors AS a
      	ON a.id = ba.author_id;
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
    SELECT b.id, b.title, b.description, a.name AS author, b.year, g.name AS genre
    FROM books AS b
    JOIN book_genre AS bg
      ON bg.book_id = b.id
    JOIN genres AS g
      ON bg.genre_id = g.id
    JOIN book_author AS ba
    ON b.id = ba.book_id
    JOIN authors AS a
      ON a.id = ba.author_id
    WHERE
      b.id = $1;
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
  }
};

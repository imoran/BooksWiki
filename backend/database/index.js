const connection = require('./config')
const pg = require('pg-promise')()(connection)


module.exports = {
  getAllBooks() {
    const sql = `
      SELECT
        *
      FROM
        books
    `
    return pg.any(sql);
  },

  createBook({title, year, description, img_url}) {
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
        *
      FROM
        books
      WHERE
        id = $1
    `
    return pg.one(sql, [id]);
  },

  updateBook({title, year, description, img_url}, id) {
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
  }
}

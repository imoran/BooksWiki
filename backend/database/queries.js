class Queries {
	constructor(db, pgp) {
		this.db = db;
		this.pgp = pgp;
	}

	getAllBooks() {
		const sql = `
		SELECT
			b.id, b.title, b.description, b.year, b.img_url,
			(
				SELECT round(AVG(rating), 1)
				FROM ratings
				WHERE b.id = book_id
			) AS rating,
			(
				SELECT json_object_agg(id, author)
				FROM authors
				JOIN book_author AS ba
					ON ba.book_id = b.id
				WHERE
					id = ba.author_id
			) AS author,
			(
				SELECT json_object_agg(id, genre)
				FROM genres
				JOIN book_genre AS bg
					ON bg.book_id = b.id
				WHERE
					id = bg.genre_id
			) AS genre
		FROM books AS b
		`
		return this.db.any(sql);
	}

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
					SELECT json_object_agg(id, author)
					FROM authors
					JOIN book_author AS ba
						ON ba.book_id = b.id
					WHERE
						id = ba.author_id
				) AS author,
				(
					SELECT json_object_agg(id, genre)
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
				b.id = $1;
		`
		return this.db.one(sql, [id]);
	}

	deleteBook(id) {
		const sql =  `
			DELETE FROM
				books
			WHERE
				id = $1
		`
		return this.db.none(sql, [id]);
	}

	getUser(id) {
		const sql = `
			SELECT
				*
			FROM
				users
			WHERE
				id = $1
		`
		return this.db.one(sql, [id]);
	}

};

module.exports = Queries;

class Actions {
	constructor(db, pgp) {
		this.db = db;
		this.pgp = pgp;
	}

	createBook({ title, year, description, img_url }) {
		const sql = `
			INSERT INTO
				books (title, year, description, img_url)
			VALUES
				($1, $2, $3, $4)
			RETURNING
				id
		`
		return this.db.one(sql, [title, year, description, img_url]);
	}

	createGenre({ genre }) {
		const allGenreIds = genre.map(one => {
			if (one['genre_id']) {
				return one['genre_id']
			} else {
				const sql = `
					INSERT INTO
						genres (genre)
					VALUES
						($1)
					RETURNING
						id
				`
				return this.db.one(sql, [one['genre']]);
			}
		})
		return Promise.all(allGenreIds);
	}

	createAuthor({ author }) {
		const allAuthorIds = author.map(one => {
			if (one['author_id']) {
				return one['author_id']
			} else {
				const sql = `
					INSERT INTO
						authors (author)
					VALUES
						($1)
					RETURNING
						id
				`
				return this.db.one(sql, [one['author']]);
			}
		})
		return Promise.all(allAuthorIds);
	}

	bookGenreAssociation(book_id, genre_id) {
		const sql = `
			INSERT INTO
				book_genre (book_id, genre_id)
			VALUES
				($1, $2);
		`
		return this.db.none(sql, [book_id, genre_id]);
	}

	bookAuthorAssociation(book_id, author_id) {
		const sql = `
			INSERT INTO
				book_author (book_id, author_id)
			VALUES
				($1, $2);
		`
		return this.db.none(sql, [book_id, author_id]);
	}

	// createBook({ title, year, description, img_url, author, genre }, id) {
	// 	const sql = `
	// 		BEGIN TRANSACTION;
	// 			INSERT INTO authors (author)
	// 			VALUES ($5) ON CONFLICT (author) DO NOTHING;
	//
	// 			INSERT INTO genres (genre)
	// 			VALUES ($6) ON CONFLICT (genre) DO NOTHING;
	//
	// 			INSERT INTO
	// 				books (title, year, description, img_url)
	// 			VALUES
	// 				($1, $2, $3, $4);
	//
	// 			INSERT INTO
	// 				book_author (author_id, book_id)
	// 			VALUES
	// 				((SELECT id FROM authors WHERE author = $5), $7);
	//
	// 			INSERT INTO
	// 				book_genre (genre_id, book_id)
	// 			VALUES
	// 				((SELECT id FROM genres WHERE genre = $6), $7);
	// 		END TRANSACTION;
	// 	`
	// 	return this.db.one(sql, [title, year, description, img_url, author, genre, id]);
	// }

	updateBook({ title, year, description, img_url }, id) {
		const sql = `
			UPDATE
				books
			SET
				title = $1, year = $2,
				description = $3, img_url = $4
			WHERE
				id = $5
			RETURNING
				id
		`
		return this.db.one(sql, [title, year, description, img_url, id]);
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

	updateUser({ name, email, password, picture }, id) {
		const sql = `
			UPDATE
				users
			SET
				name = $1, email = $2,
				password = $3, picture = $4
			WHERE
				id = $5
			RETURNING
				id
		`
		return this.db.one(sql, [name, email, password, picture, id]);
	}

	createUser({ name, email, password, picture }) {
		const sql = `
			INSERT INTO
				users (name, email, password, picture)
			VALUES
				($1, $2, $3, $4)
			RETURNING
				id
		`
		return this.db.one(sql, [name, email, password, picture]);
	}

	createComment({comment, user_id, book_id}) {
		const sql = `
			INSERT INTO
				comments (comment, user_id, book_id)
			VALUES
				($1, $2, $3)
			RETURNING
				id
		`
		return this.db.one(sql, [comment, user_id, book_id]);
	}

};

module.exports = Actions;

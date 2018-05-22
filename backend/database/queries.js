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
				) AS genre,
				(
					SELECT json_object_agg(c.comment, json_build_object('name', u.name, 'img_url', b.img_url, 'id', u.id))
					FROM comments AS c
					JOIN users AS u
						ON u.id = c.user_id
					WHERE
						c.book_id = b.id
				) AS comment
			FROM books AS b
			WHERE
				b.id = $1;
		`
		return this.db.one(sql, [id]);
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

	findUserByEmail(email) {
		const sql = `
			SELECT
				*
			FROM
				users
			WHERE
				email = $1
		`
		return this.db.any(sql, [email]);
	}

	getTitle(title) {
		console.log("title => ", title);
		const sql = `
			SELECT
				*
			FROM
				books
			WHERE
				title = $1
		`
		return this.db.any(sql, [title]);
	}

	getYears(year) {
		console.log("year => ", year);
		const sql = `
			SELECT
				*
			FROM
				books
			WHERE
				year = $1
		`
		return this.db.any(sql, [year]);
	}

	getGenre(genre) {
		console.log("genre => ", genre);
		const sql = `
			SELECT
				*
			FROM
				books
			WHERE
				genre = $1
		`
		return this.db.any(sql, [genre]);
	}

	getAuthor(author) {
		console.log("author => ", author);
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
			WHERE author.author = $1
		`
		return this.db.any(sql, [author]);
	}

};




module.exports = Queries;

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

	deleteBook(id) {
		const sql =  `
			DELETE FROM
				books
			WHERE
				id = $1
		`
		return this.db.none(sql, [id]);
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



const genre = [
	{
		genre_id : 1
	},
	{
		genre : "mystery"
	}
]

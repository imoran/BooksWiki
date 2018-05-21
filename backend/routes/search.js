const { queries, actions } = require('../database');

const search = {
	searchAll(req, res) {
		let { q } = req.query;
		q = JSON.parse(q);
		console.log(q);
		const key = Object.keys(q)[0];
		switch (key) {
			case 'title':
				queries.getTitle(q.title)
				.then( books => {
					console.log(books);
					res.status(200).json(books);
				})
				break;
			default:
				break;

		}
	}
}

module.exports = search;

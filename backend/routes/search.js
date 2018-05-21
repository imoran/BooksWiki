const { queries, actions } = require('../database');


function switchSearch(q) {
	const key = Object.keys(q)[0];
	switch (key) {
		case 'Title':
			return queries.getTitle(q[key])
		case 'Author':
			return queries.getAuthor(q[key])
		case 'Genre':
			return queries.getGenre(q[key])
		case 'Year':
			return queries.getYears(q[key])
		default:
			return;
	}
}

const search = {
	searchAll(req, res) {
		let q = JSON.parse(req.query.q);
		console.log(q);
		switchSearch(q)
		.then(books => {
			console.log(books);
			res.status(200).json(books);
		})
	}
};


module.exports = search;

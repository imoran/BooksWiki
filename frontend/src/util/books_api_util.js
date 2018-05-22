const baseUrl = 'http://localhost:3000/api';


export default {

	getAllBooks() {
		return $.ajax({
			url: `${baseUrl}/books`,
			method: 'GET'
		});
	},

	getOneBook(id) {
		return $.ajax({
			url: `${baseUrl}/books/${id}`,
			method: 'GET'
		});
	},

	getSearch(data) {
		const stringify = JSON.stringify(data);
		const url = `${baseUrl}/search/?&q=${stringify}`;
		return $.ajax({
			url,
			method: 'GET'
		});
	}
};

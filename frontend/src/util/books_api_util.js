const baseUrl = 'http://localhost:3000/api';


export default {
	getAllBooks() {
		return $.ajax({
			url: `${baseUrl}/books`,
			method: 'GET'
		});
	}
}

const baseUrl = 'http://localhost:3000/api';
const token = `Bearer ${getToken()}`;

function getToken() {
	const storage = window.localStorage;
	return storage.getItem('token');
}

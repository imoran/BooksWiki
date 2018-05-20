import booksAPI from '../util/books_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';

export const receiveAllBooks = books => ({
	type: RECEIVE_ALL_BOOKS,
	books
});

export const requestAllBooks = () => dispatch => {
	console.log("asdgfa");
	return booksAPI.getAllBooks()
	.then(books => {
		console.log("books => ", books);
		dispatch(receiveAllBooks(books))
	});
};

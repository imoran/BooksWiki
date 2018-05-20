import booksAPI from '../util/books_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';

export const receiveAllBooks = books => ({
	type: RECEIVE_ALL_BOOKS,
	books
});

export const requestAllBooks = () => dispatch => (
	booksAPI.getAllBooks()
	.then(books => { dispatch(receiveAllBooks(books)) })
);

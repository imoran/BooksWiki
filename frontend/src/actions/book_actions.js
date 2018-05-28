import booksAPI from '../util/books_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_SINGLE_BOOK = 'RECEIVE_SINGLE_BOOK';
export const RECEIVE_SELECT_BOOKS = 'RECEIVE_SELECT_BOOKS';

export const receiveAllBooks = books => ({
	type: RECEIVE_ALL_BOOKS,
	books
});

export const receiveSelectedBooks = books => ({
	type: RECEIVE_SELECT_BOOKS,
	books
});

export const receiveSingleBook = book => ({
	type: RECEIVE_SINGLE_BOOK,
	book
});

export const requestAllBooks = () => dispatch => (
	booksAPI.getAllBooks()
	.then(books => { dispatch(receiveAllBooks(books)) })
);

export const requestSingleBook = (id) => dispatch => (
	booksAPI.getOneBook(id)
	.then(book => { dispatch(receiveSingleBook(book))
	})
);

export const requestSelectedBooks = (data) => dispatch => (
	booksAPI.getSearch(data)
	.then(books => { dispatch(receiveSelectedBooks(books)) })
);

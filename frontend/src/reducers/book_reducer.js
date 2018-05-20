import { RECEIVE_ALL_BOOKS } from '../actions/book_actions';

const bookReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_ALL_BOOKS:
			return Object.assign({}, state, action.books);
		default:
			return state;
	}
};

export default bookReducer;

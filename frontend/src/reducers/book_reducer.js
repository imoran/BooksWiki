import merge from 'lodash/merge';
import { RECEIVE_ALL_BOOKS,
				 RECEIVE_SELECT_BOOKS } from '../actions/book_actions';

const bookReducer = (state = {}, action) => {
	Object.freeze(state);
	switch (action.type) {
		case RECEIVE_ALL_BOOKS:
			return merge({}, state, action.books);
		case RECEIVE_SELECT_BOOKS:
			console.log("state => ", state);
			return action.books;
		default:
			return state;
	}
};

export default bookReducer;

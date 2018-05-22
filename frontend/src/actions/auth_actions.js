import authAPI from '../util/auth_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
	type: RECEIVE_CURRENT_USER,
	user
});

export const signup = user => dispatch => (
	authAPI.signup(user)
	.then(user => {
		console.log("auth_action => ", user);
		dispatch(receiveCurrentUser(user))
	})
);

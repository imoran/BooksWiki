import authAPI from '../util/auth_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = user => ({
	type: RECEIVE_CURRENT_USER,
	user
});

export const signup = user => dispatch => (
	authAPI.signup(user)
	.then(result => {
		saveTokenUser(result)
		dispatch(receiveCurrentUser(result.user))
	})
);

export const signin = user => dispatch => (
	authAPI.signin(user)
	.then(result => {
		console.log("result signin => ", result);
		saveTokenUser(result)
		dispatch(receiveCurrentUser(result.user))
	})
);

function saveTokenUser(result) {
	let { token, user } = result;
	const storage = window.localStorage;
	if (token) {
		storage.setItem('token', token);
	}
	if (user) {
		user = JSON.stringify(user);
		storage.setItem('currentUser', user);
	}
}

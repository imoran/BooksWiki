import { combineReducers } from 'redux';
import entities from './entities_reducer';
import ui from './ui_reducer';
import auth from './auth_reducer';

const rootReducer = combineReducers({
	entities,
	ui,
	auth
});

export default rootReducer;

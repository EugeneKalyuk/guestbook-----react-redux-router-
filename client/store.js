import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import form from './components/form/form.reducer.js';

export default function store (initialState) {
	return createStore(
		combineReducers({
			form
		}),
		initialState,
		applyMiddleware(thunk)
	)
}
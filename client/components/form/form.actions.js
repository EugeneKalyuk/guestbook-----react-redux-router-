export const MAIN_SET_SETTINGS = 'MAIN_SET_SETTINGS';
export const ADD_COMMENT = 'ADD_COMMENT';

export function setSettings(data) {
	return {
		type: MAIN_SET_SETTINGS,
		payload: data
	};
}

export function addComment() {
	return {
		type: ADD_COMMENT,
	}
}
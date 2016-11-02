import React, {Component, PropTypes} from 'react';
import Form from '../../components/form/form.jsx'

if (global.IS_BROWSER) {
	require('./guestbook.styl');
}

const propTypes = {
	children: PropTypes.node
};

class GuestBook extends Component {
	render() {
		return(
			<Form />
		)
	}
}

export default GuestBook;
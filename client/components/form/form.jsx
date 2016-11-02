import React, {Component, PropTypes} from 'react';

if (global.IS_BROWSER) {
	require('./form.styl');
}

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isEmptyName: false,
			isEmptyMessage: false,
			recalls: []
		};
	}

	handlerChangeName(e) {
		this.setState({
			isEmptyName: !e.target.value.length
		})
	}

	handlerChangeMessage(e) {
		this.setState({
			isEmptyMessage: !e.target.value.length
		})
	}

	getValue(e) {
		e.preventDefault();

		let recall = {};
		let nameText = document.getElementById('name').value;
		let messageText = document.getElementById('message').value;

		if (nameText !== '' && messageText !== '') {
			recall.name = nameText;
			recall.message = messageText;
		} else {
			this.setState({
				isEmptyName: true,
				isEmptyMessage: true
			})
		}
		if (Object.keys(recall).length !== 0) {
			this.state.recalls.push(recall);
		}
		return false
	}

	render() {

		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<form id="form" className="form">
							<input type="text" form="form" onBlur={this.handlerChangeName.bind(this)} className="form__input"
										 id="name" placeholder="Enter you name"/>
							{this.state.isEmptyName ? <div className="error">Field of Name is empty</div> : null}
							<textarea form="form" className="form__textarea" onBlur={this.handlerChangeMessage.bind(this)} rows="10"
												id="message" placeholder="Enter you message"/>
							{this.state.isEmptyMessage ? <div className="error">Field of Message is empty</div> : null}
							<button type="submit" form="form" className="form__button btn btn-primary "
											onClick={this.getValue.bind(this) }>Send
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
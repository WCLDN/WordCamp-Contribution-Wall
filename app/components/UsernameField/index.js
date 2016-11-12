import React from 'react';
// noinspection JSUnresolvedVariable
import styles from './username.css';

export default class UsernameField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'value': '',
			'showValidation': false,
			'valid': false
		};
	}

	componentWillMount() {
		this.timer = null;
	}

	handleChange = (e) => {
		clearTimeout(this.timer);
		const newState = {
			showValidation: false,
			value: e.target.value,
		};
		this.setState(newState);
		this.timer = setTimeout(this.triggerChange, 1000);
	};

	triggerChange = () => {
		const newState = {
			value: this.state.value
		};
		const url = '/api/contributors/' + this.state.value;

		jQuery.ajax({
			url: url,
			dataType: 'json',
			complete: data=> {
				if (data.status === 200) {
					newState.valid = true;
				} else if (data.status === 404) {
					newState.valid = false;
				}

				this.props.onChange(newState);

				newState.showValidation = true;
				this.setState(newState);
			}
		});
	};

	className() {
		const className = 'form-control-feedback glyphicon';

		if (this.state.showValidation === false) {
			return className;
		} else if (!this.state.valid) {
			// noinspection JSUnresolvedVariable
			return className + ' glyphicon-remove ' + styles.iconRed;
		} else if (this.state.valid) {
			// noinspection JSUnresolvedVariable
			return className + ' glyphicon-ok ' + styles.iconGreen;
		}
	}

	render() {
		return (
			<div className='form-group has-feedback'>
				{ this.props.label ? <label htmlFor={this.props.name}>{this.props.label}</label> : null }
				<input type='text' className='form-control' placeholder={this.props.placeholder} name={this.props.name}
					   onChange={this.handleChange}/>
				<span className={this.className()}/>
			</div>
		);
	}
}

UsernameField.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string,
	name: React.PropTypes.string,
	label: React.PropTypes.string
};

UsernameField.defaultProps = {
	name: 'Username',
	placeholder: 'Username',
	label: 'WordPress.org Username'
};

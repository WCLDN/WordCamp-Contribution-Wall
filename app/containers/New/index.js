import React from 'react';
// noinspection JSUnresolvedVariable
import styles from './new.css';
import UsernameField from '../../components/UsernameField';

export default class New extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'username': '',
			'usernameValid': false
		};
	}

	handleChangeUsername = (e) => {
		this.setState({
			'username': e.value,
			'usernameValid': e.valid
		});
	};

	render() {
		return (
			<div className={styles.new}>
				<UsernameField onChange={this.handleChangeUsername}/>
			</div>
		);
	}
}

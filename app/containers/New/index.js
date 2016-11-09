import React from 'react';
// noinspection JSUnresolvedVariable
import styles from './new.css';
import UsernameField from '../../components/UsernameField';

export default class New extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		this.setState(e);
	};

	render() {
		return (
			<div className={styles.new}>
				<UsernameField onChange={this.handleChange}/>
			</div>
		);
	}
}

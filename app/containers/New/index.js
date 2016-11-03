import React from 'react';
// noinspection JSUnresolvedVariable
import styles from './new.css';

export default class New extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.new}>
				New View
			</div>
		);
	}
}

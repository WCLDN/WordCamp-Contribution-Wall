import React from 'react';
// noinspection JSUnresolvedVariable
import styles from './list.css';

export default class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.list}>
				List View
			</div>
		);
	}
}

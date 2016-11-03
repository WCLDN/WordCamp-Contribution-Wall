import React from 'react';
import {Link} from 'react-router';
// noinspection JSUnresolvedVariable
import styles from './filter.css';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.filter}>
				<ul>
					<li><Link to='/filter/foo'>Filter: Foo</Link></li>
					<li><Link to='/filter/bar'>Filter: Bar</Link></li>
					<li><Link to='/filter/baz'>Filter: Baz</Link></li>
				</ul>
				Filter View: {this.props.params.team}
			</div>
		);
	}
}

Filter.propTypes = {
	params: React.PropTypes.object.isRequired
};

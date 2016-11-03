import React from 'react';
import {Link} from 'react-router';
// noinspection JSUnresolvedVariable
import styles from './app.css';

const config = require('../../../config.json');

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='container'>
				<div className={styles.header}>
					<img className={styles.headerLogo} src={config.logo_uri}/>
					<h1 className={styles.headerTitle}>{config.site_title}</h1>
				</div>

				{this.props.children}

				<div className={styles.menu}>
					<Link to='/new'>New</Link> | <Link to='/'>List</Link> | <Link to='/filter'>Filter</Link>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.element.isRequired
};

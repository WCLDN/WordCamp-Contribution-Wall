import React from 'react';
// noinspection JSUnresolvedVariable
import {Radio} from 'react-radio-group';
// noinspection JSUnresolvedVariable
import styles from './team.css';
const Dashicons = require('../Dashicons');

export default class Team extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Icon = Dashicons[this.props.args.icon];
		let iconColor = '#888';
		if (this.props.colorIcon) {
			iconColor = this.props.args.icon_color;
		}
		return (
			<div className={styles.option}>
				<label value={this.props.slug}>
					<Icon fill={iconColor}/>
					{this.props.args.name}
					<Radio value={this.props.slug}/>
				</label>
			</div>
		);
	}
}

Team.propTypes = {
	slug: React.PropTypes.string.isRequired,
	args: React.PropTypes.object.isRequired,
	colorIcon: React.PropTypes.bool
};

Team.defaultProps = {
	colorIcon: false
};

import React from 'react';
import {Radio} from 'react-radio-group';
const Dashicons = require('../Dashicons');

export default class Team extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const Icon = Dashicons[this.props.args.icon];
		let iconColor = '#000';
		if (this.props.colorIcon) {
			iconColor = this.props.args.icon_color;
		}
		return (
			<div>
				<Radio id={this.props.slug} value={this.props.slug}/>
				<label value={this.props.slug} htmlFor={this.props.slug}>
					<Icon fill={iconColor}/>
					{this.props.args.name}
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

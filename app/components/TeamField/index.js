import React from 'react';
import {RadioGroup} from 'react-radio-group';
import Team from './Team';

const config = require('../../../config.json');

export default class TeamField extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChange = (e) => {
		this.props.onChange(e);
	};

	render() {
		const teams = [];
		for (const slug in config.teams) {
			// skip loop if the property is from prototype
			// noinspection JSUnresolvedFunction
			if (!config.teams.hasOwnProperty(slug)) continue;
			const team = config.teams[slug];
			const key = this.props.name + '-' + slug;

			teams.push(<Team key={key} slug={slug} args={team}/>);
		}
		return (
			<RadioGroup
				name={this.props.name}
				selectedValue={this.props.value}
				onChange={this.handleChange}>
				{teams}
			</RadioGroup>
		);
	}
}

TeamField.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	name: React.PropTypes.string,
	label: React.PropTypes.string,
	value: React.PropTypes.string.isRequired
};

TeamField.defaultProps = {
	name: 'Team',
	label: 'Contribution Team'
};

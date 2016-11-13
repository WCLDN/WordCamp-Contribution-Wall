import React from 'react';
// noinspection JSUnresolvedVariable
import {RadioGroup} from 'react-radio-group';
// noinspection JSUnresolvedVariable
import styles from './team.css';
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
			let colorIcon = false;

			if (this.props.value === slug)  {
				colorIcon = true;
			}

			teams.push(<Team key={key} slug={slug} args={team} colorIcon={colorIcon}/>);
		}
		// noinspection JSUnresolvedVariable
		return (
			<RadioGroup
				Component='fieldset'
				name={this.props.name}
				selectedValue={this.props.value}
				onChange={this.handleChange}>
				<legend>{this.props.label}</legend>
				<div className={styles.field}>
					{teams}
				</div>
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

import React from 'react';
import UsernameField from '../../components/UsernameField';
import TeamField from '../../components/TeamField';
import ContributionField from '../../components/ContributionField';

export default class New extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'username': '',
			'usernameValid': false,
			'team': '',
			'contribution': ''
		};
	}

	handleChangeUsername = (e) => {
		this.setState({
			'username': e.value,
			'usernameValid': e.valid
		});
	};

	handleChangeTeam = (e) => {
		this.setState({
			'team': e
		});
	};

	handleChangeContribution = (e) => {
		this.setState({
			'contribution': e
		});
	};

	render() {
		return (
			<div>
				<UsernameField onChange={this.handleChangeUsername}/>
				<TeamField value={this.state.team} onChange={this.handleChangeTeam}/>
				<ContributionField team={this.state.team} value={this.state.contribution} onChange={this.handleChangeContribution}/>
			</div>
		);
	}
}

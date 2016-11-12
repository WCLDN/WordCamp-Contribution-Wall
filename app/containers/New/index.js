import React from 'react';
import UsernameField from '../../components/UsernameField';
import TeamField from '../../components/TeamField';

export default class New extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'username': '',
			'usernameValid': false,
			'team': ''
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

	render() {
		return (
			<div>
				<UsernameField onChange={this.handleChangeUsername}/>
				<TeamField value={this.state.team} onChange={this.handleChangeTeam}/>
			</div>
		);
	}
}

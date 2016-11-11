const React = require('react');
const IconBase = require('react-icon-base');

export default class WelcomeAddPage extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M17 7v-3h-2v-2h-3v1h-9v15h11v-9h1v-2h2zM16 5v1h-2v2h-1v-2h-2v-1h2v-2h1v2h2z'/>
			</IconBase>
		);
	}
}

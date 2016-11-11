const React = require('react');
const IconBase = require('react-icon-base');

export default class Feedback extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2 2h16c0.55 0 1 0.45 1 1v14c0 0.55-0.45 1-1 1h-16c-0.55 0-1-0.45-1-1v-14c0-0.55 0.45-1 1-1zM17 16v-9h-14v9h14zM4 8v1h3v-1h-3zM8 8v3h8v-3h-8zM4 12v1h3v-1h-3zM8 12v3h8v-3h-8z'/>
			</IconBase>
		);
	}
}

const React = require('react');
const IconBase = require('react-icon-base');

export default class Unlock extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M12 9v-3c0-1.1-0.9-2-2-2s-2 0.9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4v3h1c0.55 0 1 0.45 1 1v7c0 0.55-0.45 1-1 1h-10c-0.55 0-1-0.45-1-1v-7c0-0.55 0.45-1 1-1h7zM11 16l-0.36-2.15c0.51-0.24 0.86-0.75 0.86-1.35 0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5c0 0.6 0.35 1.11 0.86 1.35l-0.36 2.15h2z'/>
			</IconBase>
		);
	}
}

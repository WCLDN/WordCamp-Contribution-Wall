const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminSettings extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18 16v-12c0-0.55-0.45-1-1-1h-13c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h13c0.55 0 1-0.45 1-1zM8 11h1c0.55 0 1 0.45 1 1s-0.45 1-1 1h-1v1.5c0 0.28-0.22 0.5-0.5 0.5s-0.5-0.22-0.5-0.5v-1.5h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1v-5.5c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5v5.5zM13 9h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1v-1.5c0-0.28 0.22-0.5 0.5-0.5s0.5 0.22 0.5 0.5v1.5h1c0.55 0 1 0.45 1 1s-0.45 1-1 1h-1v5.5c0 0.28-0.22 0.5-0.5 0.5s-0.5-0.22-0.5-0.5v-5.5z'/>
			</IconBase>
		);
	}
}

const React = require('react');
const IconBase = require('react-icon-base');

export default class Facebook extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M2.89 2h14.23c0.49 0 0.88 0.39 0.88 0.88v14.24c0 0.48-0.39 0.88-0.88 0.88h-4.080v-6.2h2.080l0.31-2.41h-2.39v-1.54c0-0.7 0.2-1.18 1.2-1.18h1.28v-2.16c-0.22-0.030-0.98-0.090-1.86-0.090-1.85 0-3.11 1.12-3.11 3.19v1.78h-2.090v2.41h2.090v6.2h-7.66c-0.49 0-0.89-0.4-0.89-0.88v-14.24c0-0.49 0.4-0.88 0.89-0.88z'/>
			</IconBase>
		);
	}
}

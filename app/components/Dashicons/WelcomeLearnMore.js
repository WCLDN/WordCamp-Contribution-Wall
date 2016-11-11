const React = require('react');
const IconBase = require('react-icon-base');

export default class WelcomeLearnMore extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 10l-7.46-2.98 0.46 10.98h-2l0.48-11.41-1.48-0.59 10-4 10 4zM10 5c-0.55 0-1 0.22-1 0.5s0.45 0.5 1 0.5 1-0.22 1-0.5-0.45-0.5-1-0.5zM10 11l5.57-2.23c0.71 0.94 1.2 2.070 1.36 3.3-0.3-0.040-0.61-0.070-0.93-0.070-2.55 0-4.78 1.37-6 3.41-1.22-2.040-3.45-3.41-6-3.41-0.32 0-0.63 0.030-0.93 0.070 0.16-1.23 0.65-2.36 1.36-3.3z'/>
			</IconBase>
		);
	}
}

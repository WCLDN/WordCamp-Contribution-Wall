const React = require('react');
const IconBase = require('react-icon-base');

export default class Sticky extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M5 3.61v-2.57l8.99-0.010-0.010 2.58c-1.22 0.26-2.16 1.35-2.16 2.67v0.5c0.010 1.31 0.93 2.4 2.17 2.66l-0.010 2.58h-3.41l-0.010 2.57c0 0.6-0.47 4.41-1.060 4.41-0.6 0-1.080-3.81-1.080-4.41v-2.56l-3.42-0.010 0.010-2.58c1.23-0.25 2.15-1.35 2.15-2.66v-0.5c0-1.31-0.92-2.41-2.16-2.67z'/>
			</IconBase>
		);
	}
}

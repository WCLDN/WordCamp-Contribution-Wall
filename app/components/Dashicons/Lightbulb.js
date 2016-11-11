const React = require('react');
const IconBase = require('react-icon-base');

export default class Lightbulb extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 1c3.11 0 5.63 2.52 5.63 5.62 0 1.84-2.030 4.58-2.030 4.58-0.33 0.44-0.6 1.25-0.6 1.8v1c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-1c0-0.55-0.27-1.36-0.6-1.8 0 0-2.020-2.74-2.020-4.58 0-3.1 2.51-5.62 5.62-5.62zM7 16.87v-0.87h6v0.87c0 0.62-0.13 1.13-0.75 1.13h-0.25c0 0.62-0.4 1-1.020 1h-2c-0.61 0-0.98-0.38-0.98-1h-0.25c-0.62 0-0.75-0.51-0.75-1.13z'/>
			</IconBase>
		);
	}
}

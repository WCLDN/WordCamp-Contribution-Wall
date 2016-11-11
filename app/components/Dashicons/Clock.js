const React = require('react');
const IconBase = require('react-icon-base');

export default class Clock extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM10 16c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zM9.29 10.71c0.070 0.050 0.14 0.1 0.23 0.15l-0.020 0.020 4.5 2.12-3.030-3.19-0.97-4.81-0.97 4.81h0.010c0 0.020-0.010 0.050-0.020 0.090s-0.020 0.070-0.020 0.1c0 0.28 0.1 0.52 0.29 0.71z'/>
			</IconBase>
		);
	}
}

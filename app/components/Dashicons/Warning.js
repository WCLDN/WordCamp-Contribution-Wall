const React = require('react');
const IconBase = require('react-icon-base');

export default class Warning extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zM11.13 11.38l0.35-6.46h-2.96l0.35 6.46h2.26zM11.040 14.74c0.24-0.23 0.37-0.55 0.37-0.96 0-0.42-0.12-0.74-0.36-0.97s-0.59-0.35-1.060-0.35-0.82 0.12-1.070 0.35-0.37 0.55-0.37 0.97c0 0.41 0.13 0.73 0.38 0.96 0.26 0.23 0.61 0.34 1.060 0.34s0.8-0.11 1.050-0.34z'/>
			</IconBase>
		);
	}
}
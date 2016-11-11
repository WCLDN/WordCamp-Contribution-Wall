const React = require('react');
const IconBase = require('react-icon-base');

export default class Art extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M8.55 3.060c1.010 0.34-1.95 2.010-0.1 3.13 1.040 0.63 3.31-2.22 4.45-2.86 0.97-0.54 2.67-0.65 3.53 1.23 1.090 2.38 0.14 8.57-3.79 11.060-3.97 2.5-8.97 1.23-10.7-2.66-2.010-4.53 3.12-11.090 6.61-9.9zM9.76 9.51c0.73 1.64 4.7-0.5 3.79-2.8-0.59-1.49-4.48 1.25-3.79 2.8z'/>
			</IconBase>
		);
	}
}

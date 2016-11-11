const React = require('react');
const IconBase = require('react-icon-base');

export default class Heart extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 17.12c3.33-1.4 5.74-3.79 7.040-6.21 1.28-2.41 1.46-4.81 0.32-6.25-1.030-1.29-2.37-1.78-3.73-1.74s-2.68 0.63-3.63 1.46c-0.95-0.83-2.27-1.42-3.63-1.46s-2.7 0.45-3.73 1.74c-1.14 1.44-0.96 3.84 0.34 6.25 1.28 2.42 3.69 4.81 7.020 6.21z'/>
			</IconBase>
		);
	}
}

const React = require('react');
const IconBase = require('react-icon-base');

export default class AdminCustomizer extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M18.33 3.57c0 0 0.27-0.8-0.31-1.36-0.53-0.52-1.22-0.24-1.22-0.24-0.61 0.3-5.76 3.47-7.67 5.57-0.86 0.96-2.060 3.79-1.090 4.82 0.92 0.98 3.96-0.17 4.79-1 2.060-2.060 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64 0.93-0.65 2.22-0.62 3.080 0.29 0.63 0.67 0.8 2.57-0.16 3.46-1.57 1.45-4 1.55-6.15 0.89z'/>
			</IconBase>
		);
	}
}

const React = require('react');
const IconBase = require('react-icon-base');

export default class UniversalAccess extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 2.6c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.51-1.5 1.51c-0.82 0-1.5-0.68-1.5-1.51s0.68-1.5 1.5-1.5zM3.4 7.36c0-0.65 6.6-0.76 6.6-0.76s6.6 0.11 6.6 0.76-4.47 1.4-4.47 1.4 1.69 8.14 1.060 8.38c-0.62 0.24-3.19-5.19-3.19-5.19s-2.56 5.43-3.18 5.19c-0.63-0.24 1.060-8.38 1.060-8.38s-4.48-0.75-4.48-1.4z'/>
			</IconBase>
		);
	}
}

const React = require('react');
const IconBase = require('react-icon-base');

export default class Rss extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M14.92 18h3.080c0-8.68-7.18-15.75-16-15.75v3.020c7.12 0 12.92 5.71 12.92 12.73zM9.48 18h3.080c0-5.73-4.74-10.4-10.56-10.4v3.020c2 0 3.87 0.77 5.29 2.16 1.41 1.39 2.19 3.25 2.19 5.22zM4.13 17.98c1.17 0 2.13-0.93 2.13-2.090 0-1.15-0.96-2.090-2.13-2.090-1.18 0-2.13 0.94-2.13 2.090 0 1.16 0.95 2.090 2.13 2.090z'/>
			</IconBase>
		);
	}
}

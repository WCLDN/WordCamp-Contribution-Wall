const React = require('react');
const IconBase = require('react-icon-base');

export default class LocationAlt extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M13 13.14l1.17-5.94c0.79-0.43 1.33-1.25 1.33-2.2 0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5c0 0.95 0.54 1.77 1.33 2.2zM13 3.5c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5zM14.72 8.3l3.28-1.33v9l-4.88 2.030-6.12-2.030-5 2v-9l5-2 4.27 1.41 1.73 7.3z'/>
			</IconBase>
		);
	}
}

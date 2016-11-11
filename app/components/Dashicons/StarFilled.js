const React = require('react');
const IconBase = require('react-icon-base');

export default class StarFilled extends React.Component {
	render() {
		return (
			<IconBase viewBox='0 0 20 20' {...this.props}>
				<path d='M10 1l3 6 6 0.75-4.12 4.62 1.12 6.63-6-3-6 3 1.13-6.63-4.13-4.62 6-0.75z'/>
			</IconBase>
		);
	}
}
